import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

//initialize firebase authentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //Google signIn with popup
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logout from account
  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // check email & password different validation
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("");
      setError("Not a valid email address ");
      return;
    }
    if (password.length < 6) {
      setMessage("");
      setError("Password length must be at least 6 character");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setMessage("");
      setError("Password must have least two uppercase letters");
      return;
    }
    if (password !== reEnterPassword) {
      setMessage("");
      setError("Password didn't match");
      return;
    }

    //call register or login depends on login info
    if (!isLogin) {
      registerNewUser(email, password);
    } else {
      processLogin(email, password);
    }
  };

  //firebase registration
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setError("");
        setMessage(
          "Welcome to MHealth family. Successfully your account is created"
        );
        emailVerify();
        setUserName();
      })
      .catch((error) => {
        setMessage("");
        setError("Email already exists");
      });
  };

  //registration username update
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  //verify email during registration
  const emailVerify = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email send please check & verify your email");
    });
  };

  //verify password during registration
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password Send. Check email & Reset password");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //login user
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setError("");
        setMessage("Welcome to MHealth family. Successfully you logged in");
      })
      .catch((error) => {
        setMessage("");
        setError("Wrong password or email");
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("Name will be added");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReEnterPasswordChange = (e) => {
    setReEnterPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  //observe user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    signInUsingGoogle,
    user,
    logOut,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleReEnterPasswordChange,
    email,
    password,
    error,
    message,
    toggleLogin,
    isLogin,
    resetPassword,
  };
};

export default useFirebase;

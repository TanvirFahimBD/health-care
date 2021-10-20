import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    user,
    logOut,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    email,
    password,
    error,
    message,
    toggleLogin,
    isLogin,
    resetPassword,
    handleNameChange,
    handleReEnterPasswordChange,
  } = useFirebase();

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  console.log("came from", location.state?.from);

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      console.log("user", result.user);
      console.log("came from", redirect_uri);
      history.push(redirect_uri);
    });
  };

  return (
    <div className="m-5">
      <div className="mx-5 mb-5">
        <h1 className="mb-4">{!isLogin ? "Register" : "Login"}</h1>
        <form onSubmit={handleRegistration}>
          {!isLogin && (
            <div className="row mb-3">
              <label htmlFor="inputname" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleNameChange}
                  type="name"
                  className="form-control"
                  id="inputname"
                  required
                />
              </div>
            </div>
          )}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          {!isLogin && (
            <div className="row mb-3">
              <label
                htmlFor="inputPasswordCheck"
                className="col-sm-2 col-form-label"
              >
                Reenter Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleReEnterPasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPasswordCheck"
                  required
                />
              </div>
            </div>
          )}
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  onChange={toggleLogin}
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered
                </label>
                <button onClick={resetPassword} className="mx-4">
                  Reset Password
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-danger">{error}</p>
          </div>
          <button type="submit" className="btn btn-primary">
            {!isLogin ? "Sign Up" : "Login"}
          </button>
          <div>
            <p className="mt-5 text-success">{message}</p>
          </div>
        </form>
      </div>
      <div className="text-center">
        <div>
          <button onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} /> SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

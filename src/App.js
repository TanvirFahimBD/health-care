import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Departments from "./component/Departments/Departments";
import Events from "./component/Events/Events";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import ServiceDetails from "./component/ServiceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div id="container">
        <div id="main-content">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/departments">
                <Departments></Departments>
              </Route>
              <Route path="/events">
                <Events></Events>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

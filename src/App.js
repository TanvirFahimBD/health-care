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
            {/* header component */}
            <Header />
            <Switch>
              {/* default route on home */}
              <Route exact path="/">
                <Home></Home>
              </Route>
              {/* home route */}
              <Route path="/home">
                <Home></Home>
              </Route>
              {/* private route for single service details */}
              <PrivateRoute path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              {/* department route */}
              <Route path="/departments">
                <Departments></Departments>
              </Route>
              {/* event route */}
              <Route path="/events">
                <Events></Events>
              </Route>
              {/* login route  */}
              <Route path="/login">
                <Login></Login>
              </Route>
              {/* route for not found page  */}
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
        {/* footer component */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

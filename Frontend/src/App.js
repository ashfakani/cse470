import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import firebase from "firebase/app";
import "firebase/auth";
import BookNow from "./pages/Book Now/BookNow";
import PrivateRoute from "./components/Login Components/Private Route/PrivateRoute";
import { useContext, useEffect } from "react";
import { LoginContext } from "./components/Login Components/LoginContextProvider/LoginContextProvider";

function App() {
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          console.log(user);
          const { displayName, email, photoURL } = user;
          const signedInUser = {
            name: displayName,
            email: email,
            photoURL: photoURL,
          };
          setLoggedInUser(signedInUser);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/bookService/:id">
          <BookNow></BookNow>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;

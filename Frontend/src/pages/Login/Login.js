import React from "react";
import loginArt from "../../images/Login.png";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { LoginContext } from "../../components/Login Components/LoginContextProvider/LoginContextProvider";
import { firebaseConfig } from "../../components/Login Components/Firebase Config/FirebaseConfig";
import pic from "../../images/G-3.jpg";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  document.title = "Login-Celluloid Studios";
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  const gmailProvider = new firebase.auth.GoogleAuthProvider();

  const handleGmailSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(gmailProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUserToken();
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(displayName, email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };
  return (
    <div className="row w-100">
      <div className="col-md-4 ">
        <div className="logo-btn">
          <div className="login-header">
            <h3 className="text-brand text-center ">
              Sign in to <br />{" "}
              <span className="text-gray">Celluloid Studios</span>
            </h3>
          </div>
          <div>
            <p className="text-secondary text-center mt-3">
              Log in to save your progress. We won't post anything anywhere.
            </p>
          </div>
          <div onClick={handleGmailSignIn} class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
              />
            </div>
            <p class="btn-text">
              <b>Google</b>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-8 login-img">
        <img src={loginArt} alt="" />
      </div>
    </div>
  );
};

export default Login;

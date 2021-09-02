import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { LoginContext } from "../LoginContextProvider/LoginContextProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

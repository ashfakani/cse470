import React, { useContext } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddService from "../../components/Dashboard Components/Add Service/AddService";
import ManagerService from "../../components/Dashboard Components/Manage Service/ManagerService";
import Bookings from "../../components/Dashboard Components/Bookings (User)/Bookings";
import AllBookings from "../../components/Dashboard Components/All Bookings (Admin)/AllBookings";
import Review from "../../components/Dashboard Components/Review/Review";
import AddAdmin from "../../components/Dashboard Components/Add Admin/AddAdmin";
import { LoginContext } from "../../components/Login Components/LoginContextProvider/LoginContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import PrivateRoute from "../../components/Login Components/Private Route/PrivateRoute";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  document.title = "Dashboard-Celluloid Studios";
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://celluloid-studios-server.herokuapp.com/admin/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log(data);
      });
  }, []);
  console.log(isAdmin);
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {isAdmin ? (
              <div>
                <NavLink
                  to="/dashboard/addService"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="plus">
                    Add Service
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  to="/dashboard/manageService"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="tasks">
                    Manage Service
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  to="/dashboard/allBookings"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="tasks">
                    All Bookings
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  to="/dashboard/addAdmin"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="user-plus">
                    Add Admin
                  </CDBSidebarMenuItem>
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink
                  exact
                  to="/dashboard/bookings"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="list">Bookings</CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/dashboard/review"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="comment-dots">
                    Review
                  </CDBSidebarMenuItem>
                </NavLink>
              </div>
            )}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> <span>Back To Home</span>
            </Link>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

      <Switch>
        <PrivateRoute path="/dashboard/addService">
          <AddService />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/manageService">
          <ManagerService />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/bookings">
          <Bookings />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/allBookings">
          <AllBookings />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/review">
          <Review />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addAdmin">
          <AddAdmin />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default Dashboard;

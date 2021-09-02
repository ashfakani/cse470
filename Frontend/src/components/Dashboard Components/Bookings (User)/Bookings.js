import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { LoginContext } from "../../Login Components/LoginContextProvider/LoginContextProvider";

const Bookings = () => {
  const [orders, setOrders] = useState([]);
  document.title = "Bookings-Celluloid Studios";
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  useEffect(() => {
    fetch(
      "https://celluloid-studios-server.herokuapp.com/orders/order?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container ">
      <h2 className="text-center heading-txt mb-3">Your Recent Bookings</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Sl no.</th>
            <th>Ordered By</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Order Time</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{order.bookedUserInfo.name}</td>
              <td>{order.packageName} </td>
              <td>${order.price} </td>
              <td>{new Date(order.orderTime).toDateString("dd-MM-yyy")}</td>
              <td> {order.status} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;

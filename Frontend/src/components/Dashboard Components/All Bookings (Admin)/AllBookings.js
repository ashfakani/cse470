import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { LoginContext } from "../../Login Components/LoginContextProvider/LoginContextProvider";

const AllBookings = () => {
  const [orders, setOrders] = useState([]);
  document.title = "All Bookings-Celluloid Studios";
  useEffect(() => {
    fetch("https://celluloid-studios-server.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDone = (id) => {
    fetch(
      `https://celluloid-studios-server.herokuapp.com/orders/updateDone/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orders.status),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleOnGoing = (id) => {
    fetch(
      `https://celluloid-studios-server.herokuapp.com/orders/updateOnGoing/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orders.status),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handlePending = (id) => {
    fetch(
      `https://celluloid-studios-server.herokuapp.com/orders/updatePending/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orders.status),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container ">
      <h2 className="text-center heading-txt mb-3">All Bookings</h2>
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
              <td>
                {" "}
                <Button
                  onClick={() => handlePending(order._id)}
                  variant="danger"
                  className="bg-danger"
                >
                  Pending
                </Button>{" "}
                <Button
                  onClick={() => handleOnGoing(order._id)}
                  variant="warning"
                  className="bg-warning"
                >
                  On Going
                </Button>{" "}
                <Button
                  onClick={() => handleDone(order._id)}
                  variant="success"
                  className="bg-success"
                >
                  Done
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllBookings;

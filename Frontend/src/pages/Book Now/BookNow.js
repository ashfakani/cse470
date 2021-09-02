import React, { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../components/Login Components/LoginContextProvider/LoginContextProvider";
import "./BookNow.css";
import pic from "../../images/booking.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Payment from "../../components/Booking Component/Payment/Payment";

const BookNow = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  const [booking, setBooking] = useState({});
  document.title = "Book Now-Celluloid Studios";
  const [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    fetch(`https://celluloid-studios-server.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setBookingData(data);
    console.log(data);
  };
  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      packageName: booking.packageName,
      price: booking.price,
      status: "Pending",
      orderTime: new Date().toDateString(),
      bookedUserInfo: bookingData,
      paymentId,
    };
    fetch("https://celluloid-studios-server.herokuapp.com/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="row w-100">
      <div className="col-md-4">
        <img style={{ width: "900px" }} className="me-2 " src={pic} alt="" />
      </div>
      <div className="col-md-8">
        <h1 className="text-center heading-txt ms-3 mt-5">
          Book Your Desired Service Now
        </h1>
        <div className="form">
          <div style={{ display: bookingData ? "none" : "block" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3
                style={{ fontSize: "25px" }}
                className="text-center heading-txt  mb-5"
              >
                Your Chosen Package:{" "}
                <span className="heading-portion">{booking.packageName}</span>
              </h3>

              <input
                defaultValue={loggedInUser.name}
                name="name"
                {...register("name")}
                placeholder="Name"
              />
              {errors.name && <p> Name is required</p>}
              <input
                defaultValue={loggedInUser.email}
                name="email"
                {...register("email")}
                placeholder="Email"
              />
              {errors.name && <p>Email is required</p>}
              <input
                name="address"
                {...register("address")}
                placeholder="Address"
              />
              {errors.name && <p>Address is required</p>}
              <input name="phone" {...register("phone")} placeholder="Phone" />
              {errors.name && <p>Phone Number is required</p>}

              <input type="submit" />
            </form>
          </div>
          <div style={{ display: bookingData ? "block" : "none" }}>
            <h3
              style={{ fontSize: "35px" }}
              className="text-center heading-txt"
            >
              You'll be charged with{" "}
              <span className="heading-portion">${booking.price}</span>{" "}
            </h3>
            <Payment handlePaymentSuccess={handlePaymentSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

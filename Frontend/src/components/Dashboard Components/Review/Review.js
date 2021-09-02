import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../Login Components/LoginContextProvider/LoginContextProvider";
import "./Review.css";
const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  document.title = "Review-Celluloid Studios";
  const onSubmit = (data, e) => {
    console.log(data);
    const reviewDetails = {
      name: loggedInUser.name,
      image: loggedInUser.photoURL,
      review: data.review,
    };
    fetch("https://celluloid-studios-server.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewDetails),
    }).then((response) => console.log("server side response"));
    e.target.reset();
  };
  return (
    <div className="review-form">
      <h5 className="text-center heading-txt mb-3">
        Please Share Your Valuable Thoughts With Us
      </h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={loggedInUser.name}
          name="name"
          {...register("name")}
          placeholder="Your Name"
        />
        {errors.name && <p>Your Name is required</p>}
        <textarea
          name="review"
          {...register("review")}
          placeholder="Your Review"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;

import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  document.title = "Add Admin-Celluloid Studios";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const admin = {
      email: data.email,
    };
    fetch("https://celluloid-studios-server.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    }).then((res) => console.log("Response"));
    e.target.reset();
  };
  return (
    <div className="review-form">
      <h2 className="text-center heading-txt mb-3">Add Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" {...register("email")} placeholder="Email" />
        {errors.name && <p>Add an Email</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddAdmin;

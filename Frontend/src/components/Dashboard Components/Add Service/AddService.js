import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  document.title = "Add Service-Celluloid Studios";
  const onSubmit = (data, e) => {
    console.log(data);
    const serviceDetails = {
      packageName: data.package,
      price: data.price,
      desc1: data.desc1,
      desc2: data.desc2,
      desc3: data.desc3,
      desc4: data.desc4,
    };
    fetch("https://celluloid-studios-server.herokuapp.com/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceDetails),
    }).then((response) => console.log("server side response"));
    e.target.reset();
  };

  return (
    <div className="shipment-form">
      <h2 className="text-center heading-txt mb-3"> Add a Service </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="package"
          {...register("package")}
          placeholder="Package Name"
        />
        {errors.name && <p>Package Name is required</p>}
        <input name="price" {...register("price")} placeholder="Price" />
        {errors.name && <p>Price is required</p>}
        <input
          name="desc1"
          {...register("desc1")}
          placeholder="Description 1"
        />
        {errors.name && <p>Description 1 is required</p>}
        <input
          name="desc2"
          {...register("desc2")}
          placeholder="Description 2"
        />
        {errors.name && <p>Description 2 is required</p>}
        <input
          name="desc3"
          {...register("desc3")}
          placeholder="Description 3"
        />
        {errors.name && <p>Description 3 is required</p>}
        <input
          name="desc4"
          {...register("desc4")}
          placeholder="Description 4"
        />
        {errors.name && <p>Description 4 is required</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;

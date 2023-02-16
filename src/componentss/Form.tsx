import React, { useEffect, useState } from "react";
import "./Form.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import errorPng from "../images/icon-error.svg";
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  type Inputs = {
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Password: string;
  };
  type NewType = SubmitHandler<Inputs>;
  const onSubmit: NewType = (data) => {
    return console.log(data);
  };
  console.log("FirstName errors", errors);
  return (
    <div>
      <div className="sale">
        <p>
          <span>Try it free 7 days</span> then $20/mo. there after
        </p>
      </div>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputsCont">
          <input
            type="text"
            id="FirstName"
            placeholder="First Name"
            {...register("FirstName", { required: "errori moxda" })}
          />
          {errors.FirstName && (
            <img src={errorPng} className="errorStyle"></img>
          )}
        </div>
        <div className="inputsCont">
          <input
            type="text"
            id="Last Name"
            placeholder="Last Name"
            {...register("LastName")}
          />
        </div>
        <div className="inputsCont">
          <input
            type="text"
            id="Email Address"
            placeholder="Email Address"
            {...register("EmailAddress")}
          />
        </div>
        <div className="inputsCont">
          <input
            type="text"
            id="Password"
            placeholder="Password"
            {...register("Password")}
          />
        </div>
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className="infoText">
          By clicking the button, you are agreeing to our{" "}
          <span className="infSPan">Terms and services</span>
        </p>
      </form>
    </div>
  );
}
export default Form;

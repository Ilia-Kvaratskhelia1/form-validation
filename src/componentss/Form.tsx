import React, { useEffect, useState } from "react";
import "./Form.css";
import { SubmitHandler, useForm } from "react-hook-form";
import errorPng from "../images/icon-error.svg";
function Form() {
  const forMail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return (
      console.log(data )

    )
  };
  console.log("ერროოორ" , errors);
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
            {...register("FirstName", 
            {required:true , pattern:{
            value:/^[A-Za-z]+$/i ,
            message:"for firstName"}
            })}
            style={{ borderColor: errors.FirstName ? "Red" : "" }}

          />
          {errors.FirstName && <img src={errorPng} className="errorStyle" />}
        </div>
        {errors.FirstName &&  <span style={{color:"brown" , fontSize:"0.90rem"}}>cant be a number or free and only english</span>}

        <div className="inputsCont">
          <input
            type="text"
            id="Last Name"
            placeholder="Last Name"
            {...register("LastName",{required:true ,  pattern:{
              value:/^[A-Za-z]+$/i ,
              message:"for LastName"},

              })}
            style={{ borderColor:errors.LastName ? "Red" : "" }}
          />
          {errors.LastName && <img src={errorPng} className="errorStyle" />}
        </div>
        {errors.EmailAddress &&  <span style={{color:"brown" , fontSize:"0.90rem"}}>cant be a number or free and only englishh</span>}

        <div className="inputsCont">
          <input
            type="text"
            id="Email Address"
            placeholder="Email Address"
            {...register("EmailAddress", 
            {required:true ,pattern:
              {value:forMail,
              message:"მხოლოდ ასოები"
            }})}
            style={{ borderColor: errors.EmailAddress ? "Red" : "" }}
          />
          {errors.EmailAddress && <img src={errorPng} className="errorStyle" />}
        </div>
          {errors.EmailAddress &&  <span style={{color:"brown" , fontSize:"0.90rem"}}>should finished @domain.ucoz and includes one symbol</span>}
        <div className="inputsCont">
          <input
            type="password"
            id="Password"
            placeholder="Password"
            {...register("Password", { required: "password error" })}
            style={{ borderColor: errors.Password ? "Red" : "" }}
          />
          {errors.Password && <img src={errorPng} className="errorStyle" />}
        </div>
        {errors.EmailAddress &&  <span style={{color:"brown" , fontSize:"0.90rem"}}>Can't be empty</span>}

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

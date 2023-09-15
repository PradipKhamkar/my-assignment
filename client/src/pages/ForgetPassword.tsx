import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (  
    <div className="h-screen flex justify-center items-center bg-[#eee]">
      <div className="bg-white md:h-[23rem] md:w-[40rem] w-[98%] rounded-md p-5 pt-8 ">
        <div className=" h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl text-violet font-bold text-center">Did you forget your password?</h1>
            <p className="text-sm text-[#655A5A] mt-2 text-center">Enter your email address and we'll send you a link to restore password</p>
          </div>
          <div className="md:w-[70%] md:m-0 mt-5 ">
            <div className="">
              <form>
                <label htmlFor="emailId" className="text-base text-lightWhite">Email Address</label><br />
                <input type="email" name="" id="emailId" className="mt-2 text-base w-full h-[3.2rem] inputBorder outline-none px-3 rounded-md" />
                <button type="submit" className="mt-10 bg-darkViolet w-full text-white p-3 rounded-md">Request reset link</button>
              </form>
              <div className="flex flex-col justify-center items-center mt-5">
                <Link to="/" className="text-sm text-[#9C9C9C] underline cursor-pointer">Back to log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

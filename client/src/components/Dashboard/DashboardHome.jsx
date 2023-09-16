import React from "react";

const DashboardHome = () => {
  return (
    <div className="flex justify-center items-center  pt-56">
      <div className=" flex flex-col justify-center items-center">
        <img
          src={require("../../assets/images/logo.png")}
          alt="icon"
          className="w-48"
        />
        <p className="text-lg text-[#040404] mt-1">
          Welcome to Digitalflake Admin
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;

import React from "react";
import { AccountSvg, MenuSvg } from "../common/Svg";
import ConfirmAlert from "../common/ConfirmAlert";
import { useSelector } from "react-redux";
import { clearError, loggedOutAction } from "../../redux/userSlice/logOut";
import { useAppDispatch } from "../../hooks/hook";

interface HeaderProps {
  handelSideBar: any;
}

const Header: React.FC<HeaderProps> = ({ handelSideBar }) => {
  const { success, loading, error } = useSelector((state: any) => state.logout);
  const dispatch = useAppDispatch();

  const handelLogOut = () => {
    dispatch(loggedOutAction());
  };

  if (error) {
    alert(error);
    setTimeout(() => dispatch(clearError()), 5000);
  }

  if (success) {
    alert("Logged out successfully..!!");
    window.location.reload();
  }

  return (
    <header className="bg-[#662671] px-5 md:py-4 py-3 fixed w-full max-w-[2500px] z-50">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <button onClick={handelSideBar} className="lg:hidden">
            <MenuSvg size="30" color="white" />
          </button>
          <img
            src={require("../../assets/images/headerLogo.png")}
            alt=""
            className="md:w-[11rem]"
          />
        </div>
        <button
          onClick={() =>
            ConfirmAlert(
              "Confirm",
              "Log Out",
              "Are you sure you want to log out ?",
              handelLogOut
            )
          }
        >
          <AccountSvg size="30" color="white" />
        </button>
      </div>
    </header>
  );
};

export default Header;

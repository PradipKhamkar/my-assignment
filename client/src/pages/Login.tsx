import React,{useState} from "react";
import "./Home.css";
import { PasswordInput, TextInput } from "../components/common/Inputs";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/hook";
import { clearError, loginUserAction } from "../redux/userSlice/loginSlice";
import {useSelector} from "react-redux"
import Loader from "../components/common/Loader";


const Login = () => {

  const dispatch = useAppDispatch()

  const {loading,success,error} = useSelector((state:any)=>state.loginUser);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handelSubmit = ()=>{
    dispatch(loginUserAction(email,password))
  }
  
  if(error){
    alert(error);
    dispatch(clearError())
  }


  return (
    <div>
      {loading ? <Loader/>:
      <div className="h-screen w-full bg-[#eee] flex justify-center items-center">
        <div className="md:h-[28rem] md:w-[50rem] w-full loginBg flex md:justify-start justify-center items-center ">
          <div className="bg-white  h-full w-[98%] md:w-[50%]  p-5  rounded-md customShadow">
            <div className="h-full w-full flex justify-between flex-col">
              <div>
                <div className=" flex flex-col justify-center items-center">
                  <img
                    src={require("../assets/images/logo.png")}
                    alt="logo"
                    className="w-[10rem]"
                  />
                  <p className="text-base text-lightWhite">
                    Welcome to Digitalflake Admin
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center gap-8 p-5 mt-4">
                <TextInput value={email} handelChange={setEmail} label="Email Id" className="w-full" />
                <PasswordInput value={password} handelChange={setPassword} label="Password"  className="w-full"/>
                </div>
                <div className="px-5 py-0 flex  justify-end">
                  <Link to="/forgetpassword" className="text-sm text-right cursor-pointer text-lightViolet">
                    forget password?
                  </Link>
                </div>
              </div>
              <div className=" p-5">
                <button className="w-full bg-darkViolet p-2 rounded-sm text-white text-base" onClick={handelSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Login;

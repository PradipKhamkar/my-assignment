import React, { useState } from "react";
import { PasswordSvg } from "./Svg";

interface TextInputProps {
  value: any;
  label: String;
  handelChange: Function;
  className?: String;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  handelChange,
  label,
  className,
}) => {
  return (
    <div className={`relative h-12 ${className}`}>
      <label
        htmlFor="name"
        className="absolute -top-3 left-[0.8rem] backdrop-blur-md  text-base px-1 pr-3 "
      >
        {label}
      </label>
      <input
        type="text"
        id="name"
        className=" inputBorder rounded-md h-12 w-full outline-none pl-4 focus:border-2 bg-white text-base"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
      />
    </div>
  );
};

interface NumberInputProps {
  value: any;
  label: String;
  handelChange: Function;
  className?: String;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  handelChange,
  label,
  className,
}) => {
  return (
    <div className={`relative h-12 ${className}`}>
      <label
        htmlFor="name"
        className="absolute -top-3 left-[0.8rem] backdrop-blur-md  text-base px-1 pr-3 "
      >
        {label}
      </label>
      <input
        type="number"
        className="inputBorder rounded-md h-12 w-full outline-none pl-4 focus:border-2 bg-white text-base"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
      />
    </div>
  );
};

interface PasswordInputProps {
  value: any;
  label: String;
  handelChange: Function;
  className?: String;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  handelChange,
  label,
  className,
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordShow = () => {
    setPasswordShow(() => !passwordShow);
  };
  return (
    <div className={`relative h-12 ${className}`}>
      <label
        htmlFor="password"
        className="absolute -top-3 left-[0.8rem] backdrop-blur-md  text-base px-1 pr-3 "
      >
        {label}
      </label>
      <div className="">
        <input
          type={passwordShow ? "text" : "password"}
          id="password"
          className="inputBorder rounded-md h-12 w-full outline-none px-4 pr-10 focus:border-2 bg-white text-base"
          value={value}
          onChange={(e) => handelChange(e.target.value)}
        />
        <button className="absolute top-4 right-5" onClick={togglePasswordShow}>
          <PasswordSvg size={18} color="#685D5D" />
        </button>
      </div>
    </div>
  );
};

interface DropDownInputPrps {
  value: any;
  option: Array<any>;
  label: String;
  handelChange: Function;
  className?: String;
}

export const DropDownInput: React.FC<DropDownInputPrps> = ({
  value,
  option,
  label,
  handelChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={` relative ${className}`}>
      <div
        className={`relative h-12 inputBorder rounded-md w-full flex items-center px-2 cursor-pointer`}
        onClick={toggleDropdown}
      >
        <label
          htmlFor="name"
          className="absolute -top-3 left-[0.8rem] backdrop-blur-md  text-base px-1 pr-3 "
        >
          {label}
        </label>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-base text-center pl-3">{value}</h3>
          <img
            src={require("../../assets/images/dropDownIcon.png")}
            alt=""
            className="w-4"
          />
        </div>
      </div>
      {
        <div
          className={`bg-[#edeaea] transition-all absolute w-full top-14 rounded-lg z-10 ${
            isOpen ? "flex flex-col" : "hidden"
          }`}
        >
          {option.map((item, index) => {
            console.log(option.length - 1 === index);
            return (
              <p
                className={`text-center text-base cursor-pointer ${
                  option.length - 1 === index
                    ? "p-4"
                    : "border-b-[0.10rem] border-[#CBCBCB] p-4"
                }`}
                onClick={() => {
                  toggleDropdown();
                  handelChange(item);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      }
    </div>
  );
};

interface FileInputProps {
  value?: any;
  label: String;
  handelChange: Function;
  className?: String;
}

export const FileInput: React.FC<FileInputProps> = ({
  value,
  handelChange,
  label,
  className,
}) => {
  const [fileName, setFileName] = useState("");

  return (
    <div
      className={`relative h-12 ${className} inputBorder rounded-md h-12 w-full flex flex-col justify-center  relative`}
    >
      <label
        htmlFor="image"
        className="absolute -top-3 left-[0.8rem] backdrop-blur-md  text-base px-1 pr-3 "
      >
        {label}
      </label>
      <label
        className=" flex justify-end items-center p-1 cursor-pointer absolute left-72"
        htmlFor="image"
      >
        <img
          src={require("../../assets/images/fileUploadIcon.png")}
          alt=""
          className="w-5"
        />
      </label>
      <p className="text-base pl-4">
        {fileName?.slice(0, 20)} {fileName?.length > 20 && "..."}
      </p>
      <input
        type="file"
        id="image"
        accept="image/png, image/gif, image/jpeg"
        className="inputBorder rounded-md h-12 w-full outline-none pl-4 focus:border-2 bg-white text-base hidden"
        onChange={(e: any) => {
          setFileName(e.target?.files[0]?.name);
          handelChange(e);
        }}
      />
    </div>
  );
};

import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import Anurag from "./SocialLinks/myphoto.jpeg";
import "../Components/Global.css";
import cv from "../Components/SocialLinks/Resume.pdf";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Profile = ({ show, setShow, darkmode, bgcolor,setCross }) => {

 const handleCross=()=>{
  setCross(false)
  setShow(false)
 }

  return (
    <>
      {show ? (
        <div
          className={`${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } lg:w-11/12  md:w-8/12  sm:w-11/12 absolute sm:top-50 z-20`}
        >
          <NavLink to="/">
            <div
              onClick={handleCross}
              className={`bg-slate-200 rounded-lg flex items-center p-2 gap-1`}
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaRegUser className="text-xl" />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                About
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Projects">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaLaptopCode
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Projects
              </h1>
            </div>
          </NavLink>

         
          <NavLink to="/Certify">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <AiOutlineSafetyCertificate
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Skills
              </h1>
            </div>
          </NavLink>

          <NavLink to="/Contact">

          <div
          onClick={handleCross}
          
            className="rounded-lg flex items-center p-2"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <TiContacts
              className={`text-xl my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            />
            <h1
              className={`text-sm my-1 ${
                bgcolor === "white" ? "text-black" : "text-white"
              }`}
            >
              Contact
            </h1>
          </div>
          </NavLink>
        </div>

        
      ) : null}

      <div className="w-full flex justify-around">
        <div
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-7  ${
            darkmode === "dark" ? "bg-black" : "bg-white"
          }`}
        >

          <h1
            className={`text-2xl font-bold relative lg:top-16 sm:top-24 ${
              bgcolor === "white" ? "text-black" : "text-white"
            }`}
          >
            LOKESH MITTAL
          </h1>
          <div
            className="passion w-7/12 h-8 p-2 relative lg:top-12 sm:top-20"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <h1
              className={"text-center text-nowrap text-sm"}
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              Software Engineer
            </h1>
          </div>

          <div className=" w-96 p-2 flex gap-2 justify-center relative lg:top-10 sm:top-14">

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <a href="https://in.linkedin.com/in/lokesh24mittal" target="_blank">
                {" "}
                <FaLinkedin className="text-2xl text-blue-600  fw-bold" />{" "}
              </a>
            </div>

            <div
              className="insta w-8 h-8 p-1 flex justify-center items-center rounded-lg hover:bg-blue-500  bg-slate-100"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`
              }}
            >
              <a href="https://github.com/lokesh24mittal" target="_blank">
                {" "}
                <BsGithub className="text-2xl text-black  fw-bold"
                style={{
                  color: `${bgcolor === "white" ? "black" : "white"}`
                }}
                />{" "}
              </a>
            </div>
          </div>

          <div
            className="w-68  p-4 flex flex-col gap-2 rounded-lg relative top-8"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <CiMobile4 className="text-2xl text-pink-500 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  +91-9518016639
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <AiTwotoneMail className="text-2xl text-sky-600 hover:text-white" />
              </div>

              <div className="phone">
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=lokesh24mittal@gmail.com&tf=1" target="_blank">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  } text-sm sm:text-sm`}
                >
                  lokesh24mittal@gmail.com
                </h1>
                </a>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <IoLocationSharp className="text-2xl text-pink-600 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Rohtak,Haryana
                </h1>
              </div>
            </div>

            <div
              className={`flex  items-center gap-2 ${
                bgcolor === "white"
                  ? "border-b border-grey-200 p-1"
                  : "border-b border-slate-500"
              }`}
            >
              <div
                className={`phone w-10 h-10 p-2 flex items-center justify-center ${
                  bgcolor == "white" ? "bg-white" : "bg-black"
                } rounded-lg  hover:bg-blue-500`}
              >
                <BsCalendarDate className="text-2xl text-purple-600 hover:text-white" />
              </div>

              <div className="phone">
                <h1
                  className={`${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  24 Apr 2001 
                </h1>
              </div>
            </div>
          </div>
          <div className="flex relative top-5">
            <button className="bg-blue-500 flex items-center rounded-lg justify-center text-white p-2 text-md text-nowrap w-36 h-10">
              <a href={cv} download="Resume" className="flex">
                <MdOutlineFileDownload className="text-2xl" />
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

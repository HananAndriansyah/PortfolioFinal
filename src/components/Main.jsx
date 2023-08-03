import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter ,} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai"
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1836&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30 ">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-700">
            I'am Hanan andriansyah
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-700">
            I'am a
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Frontend Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            {/* <FaTwitter className="cursor-pointer" size={20} /> */}
            {/* <FaFacebook className="cursor-pointer" size={20} /> */}
            <AiFillGithub className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20} />
            <a href="https://www.linkedin.com/in/hananandriansyah/">
              <FaLinkedin className="cursor-pointer" size={20} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

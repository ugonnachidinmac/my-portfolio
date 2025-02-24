import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <section className="bg-black text-white w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-8 py-10">
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.facebook.com/ugonna.chidinma.3?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
         
          <a
            href="https://www.linkedin.com/in/chidinma-ugonna-8b844a279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/ugonna.chidinma.3?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareTwitter />
          </a>
          <a
            href="https://www.facebook.com/ugonna.chidinma.3?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube /> 
          </a>
        
         
        </div>
        <div className="text-center">
          <p className="text-center">
            Copyright © {new Date().getFullYear()} Ugonna Chidinma C. All rights
            reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

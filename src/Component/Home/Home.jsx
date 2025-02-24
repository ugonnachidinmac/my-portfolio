import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { Image } from "cloudinary-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let redir = useNavigate();
  return (
    <section className="bg-[#080707] text-white w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 py-[105px]">
      {/* Left Side (Text) */}
      <div className="text-center md:text-left w-full md:w-1/2">
        <p className="text-2xl md:text-3xl font-medium">Hello,</p>
        <p className="text-4xl md:text-5xl font-bold">
          I'm <span className="text-yellow-400">Chidinma,</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold">Website Designer</h1>
        <p className="text-base md:text-lg mt-2">
          I am a skilled web designer with experience in creating visually
          appealing and user-friendly websites.
        </p>

        {/* Hire Me Button */}
        <div className="mt-6 flex items-center justify-center md:justify-start"
        
        onClick={() => {
          redir('/hireMe');
          setMenuOpen(false); // Close menu after clicking
        }}
      >
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition" >
            <IoBag />
            <span>Hire Me</span>
          </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
        <Image
          className="w-56 h-56 md:w-96 md:h-96 object-cover rounded-full"
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739475256/my_pic_cmd410.png"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "cloudinary-react";
import { GrContact } from "react-icons/gr";
import { IoIosMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let redir = useNavigate();

  return (
    <nav className="bg-black w-full h-[80px] flex items-center justify-between px-6 md:px-10 fixed z-50">
      {/* Logo */}
      <Image
        className="rounded w-[50px]"
        cloudName="dqtyrjpeh"
        publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1739900465/LogoPortFolio_detey1.png"
      />

      {/* Menu Button (Mobile) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaRegWindowClose /> : <IoIosMenu />}
      </button>

      {/* Links for Desktop */}
      <ul className="hidden md:flex gap-8 text-white">
        <li>
          <Link
            to="/"
            className="text-white hover:text-yellow-400 hover:underline hover:decoration-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-yellow-400 hover:underline hover:decoration-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="text-white hover:text-yellow-400 hover:underline hover:decoration-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition duration-300"
          >
            Portfolio
          </Link>
        </li>
      </ul>

      {/* Contact Button (Only Visible on Desktop) */}
      <button
        className="hidden md:block bg-white text-black px-4 py-2 rounded-lg"
        onClick={() => {
          redir("/contactMe");
          setMenuOpen(false);
        }}
      >
        <div className="flex items-center justify-center">
          <GrContact className="mr-2" />
          <p>Contact Me</p>
        </div>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black text-white flex flex-col items-center py-6 md:hidden">
          <Link to="/" className="py-2" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="py-2" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link
            to="/portfolio"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          {/* Contact Button (Only Visible in Mobile Menu) */}
          <button
            className="bg-white text-black px-4 py-2 mt-4 rounded-lg"
            onClick={() => {
              redir("/contactMe");
              setMenuOpen(false);
            }}
          >
            <div className="flex items-center justify-center">
              <GrContact className="mr-2" />
              <p>Contact Me</p>
            </div>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

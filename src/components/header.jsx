import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/akefx-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#1C1C1C] py-4 md:py-5 z-10 fixed top-0 left-0 w-full shadow-xl">
      <div className="max-w-xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 flex flex-row md:flex-row justify-between items-center px-4 md:px-0">
        <img className="h-12" src={Logo} alt="site logo" />
        <div className="md:hidden z-20">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`text-white text-lg md:flex md:items-center h-screen px-5 md:px-0 md:h-auto absolute md:w-auto w-full bg-[#1C1C1C] left-0 top-0 md:static ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0 pt-20 md:pt-0 text-right 5 md:px-0">
            <li>
              <a href="#testimonials" className="hover:text-gray-200">
                O'quvchilarimiz fikrlari
              </a>
            </li>
            <li>
              <a href="#pricingSection" className="hover:text-gray-200">
                Kurs narxlari
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200">
                Aloqa
              </a>
            </li>
          </ul>
          <a
            href="https://t.me/akefxbot"
            target="blank"
            className="md:hidden flex w-full text-center justify-center mt-32 bg-[#DFBE77] text-[#1C1C1C] font-bold text-1xl px-6 py-3 rounded-lg"
          >
            Telegram bot
          </a>
        </nav>
        <a
          href="https://t.me/akefxbot"
          target="blank"
          className="hidden md:inline-block bg-[#DFBE77] text-[#1C1C1C] font-bold text-1xl px-6 py-3 rounded-lg"
        >
          Telegram bot
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8" id="contact">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <FaPhone className="text-gray-400 mr-2" />
            <a href="tel:+998944077807" className="text-gray-400 text-lg">
              +998 (94) 407 78 07
            </a>
          </div>

          <div className="flex items-center my-4 sm:my-0">
            <a href="https://t.me/ShokhPesni">
              <FaTelegram className="social-media-icon text-gray-400 mx-2 w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ake__fx" target="blank">
              <FaInstagram className="social-media-icon text-gray-400 mx-2 w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <a
              href="https://goo.gl/maps/keuaA1nv51KeVUah6"
              target="blank"
              className="text-gray-400 text-lg text-center md:text-right"
            >
              Toshkent shahar, Chilonzor tumani, Cho'ponota ko'chasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

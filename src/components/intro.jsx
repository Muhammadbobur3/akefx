import React from "react";
import { FaCheck } from "react-icons/fa";
import bgImage from "../assets/images/video.mp4";

export const Intro = () => {
  return (
    <div className="bg-[#1C1C1C] mt-[80px] md:mt-[88px]">
      <div className="py-16 md:flex max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center mx-auto">
        <div className="md:w-1/2 pr-10 md:pr-20 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-7xl text-white font-bold mb-6">
            <span className="text-[#DFBE77]">Ake Fx</span> Trading Akademiyasi
          </h1>
          <div className="text-lg text-white mb-4 flex items-start">
            <FaCheck color="#DFBE77" className="mr-4 mt-1 w-5 h-5" />
            <p>
              Profissional traderlar kabi bozorda savdo qilishingiz uchun bilim
              va ko'nikmalar beramiz.
            </p>
          </div>
          <div className="text-lg text-white mb-10 flex items-start">
            <FaCheck color="#DFBE77" className="mr-4 mt-1 w-5 h-5" />
            <p>
              Depoziti yo'q va investitsiya qidirayotgan traderlar uchun esa Ake
              Fx tomonidan investitsiyalar beriladi.
            </p>
          </div>
          <a
            href="https://t.me/akefxbot"
            target="blank"
            className="inline-block bg-[#DFBE77] text-[#1C1C1C] font-bold text-2xl px-8 py-4 rounded-lg"
          >
            Kursga yozilish
          </a>
        </div>

        <div className="md:w-1/2 relative">
          <video
            className="w-[444px] h-[252px] mr-20 border-4 border-[#DFBE77] rounded-2xl aspect-video object-cover ml-auto"
            src={bgImage}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

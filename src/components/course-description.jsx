import React from "react";
import trading from "../assets/images/transparent.webp";

const CourseDescription = () => {
  return (
    <div className="bg-[#1C1C1C] py-12">
      <div className="flex flex-col p-6 md:flex-row items-center md:items-start md:justify-between max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-white rounded-2xl shadow-2xl shadow-black/30">
        <div className="md:w-1/2 lg:w-2/5 mx-auto md:mx-0 mb-8 md:mb-0 order-1 md:order-0">
          <img
            src={trading}
            alt="description"
            className="md:h-[370px] md:w-[400px] w-[300px] h-auto object-contain md:object-cover md:ml-10"
          />
        </div>
        <div className="md:w-1/3 lg:w-3/5 md:pl-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-100">
            Treyderlar nima ish qiladi?
          </h2>
          <p className="text-gray-300 text-lg leading-7 w-4/5 mb-8">
            Traderlar xalqaro bozorda valyuta airboshlash, har xil yirik
            kampaniyalar aksiyalari, qimmatbaho metallar savdosi bilan
            shug'ullanadi.Bozorda narxni o'rganib arzon narxda sotib olib so'ng
            qimmatlashgach sotib foyda ko'rishadi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;

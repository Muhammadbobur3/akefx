import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="bg-[#1C1C1C] py-12" id="pricingSection">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-gray-100">
          O'zingizga <span className="text-[#DFBE77]">mos tarifni</span> tanlang
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Gold pricing card */}
          <div className="bg-[#232323] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex-col flex-grow h-full">
              <h3 className="text-4xl leading-6 font-medium text-gray-300">
                Gold 🥇
              </h3>
              <p className="mt-4 text-md leading-5 text-gray-400">
                Gold ta'rifida Siz uchun kerak bo'ladigan barcha bilimlar
                beriladi.Darslar kam o'quvchilar bilan olib boriladi va siz
                ko'proq ustozlar bilan individual ishlash imkoniga ega
                bo'lasiz.Texnik, Fundamental, Sentimental, Risk menejment va
                Bozor Prisxologiyasi to'liq o'rgatiladi. Bizninig Pro traderlar
                bilan birgalikda bozorni bemalol taxlil qila boshlaysiz!
              </p>
              <div className="mt-6 flex-col flex-grow h-full">
                <div className="flex items-center">
                  <h4 className="text-4xl leading-5 font-semibold text-gray-400">
                    $10 000
                  </h4>
                  <p className="ml-1 text-md leading-5 text-gray-400">
                    /to'liq kurs
                  </p>
                </div>
                <div className="mt-10">
                  <ul className="list-reset">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Guruhda o'quvchilar soni maximal 5 tani tashkil qiladi!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Savdo qilish uchun nazariy va amaliy bilimlar to'liq
                        o'rgatiladi!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Expertlar bilan birgalikda amaliyot ham mavjud!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Investitsiya: 10000$
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="https://t.me/akefxbot"
                    target="blank"
                    className="block text-center h-12 items-center w-full bg-[#DFBE77] text-[#1C1C1C] hover:bg-yellow-400/50 py-2 px-4 rounded-md text-xl font-semibold focus:outline-none transition duration-150 ease-in-out"
                  >
                    Kursga yozilish
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Silver pricing card */}
          <div className="bg-[#232323] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col flex-grow h-full">
              <h3 className="text-4xl leading-6 font-medium text-gray-300">
                Silver 🥈
              </h3>
              <p className="mt-4 text-md leading-5 text-gray-400">
                Silver ta'rifida siz uchun kerak bo'ladigan barcha bilimlar
                beriladi. Texnik, Fundamental, Sentimental, Risk menejment va
                Bozor Prisxologiyasi to'liq o'rgatiladi. Bizninig Pro traderlar
                bilan birgalikda bozorni bemalol taxlil qila boshlaysiz!
              </p>
              <div className="mt-6 flex flex-col flex-grow h-full">
                <div className="flex items-center">
                  <h4 className="text-4xl leading-5 font-semibold text-gray-400">
                    $5 000
                  </h4>
                  <p className="ml-1 text-md leading-5 text-gray-400">
                    /to'liq kurs
                  </p>
                </div>
                <div className="mt-10">
                  <ul className="list-reset">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Guruhda o'quvchilar soni maximal 10-15 ta bo'ladi!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Savdo qilish uchun nazariy va amaliy bilimlar to'liq
                        o'rgatiladi!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Expertlar bilan birgalikda amaliyot ham mavjud!
                      </p>
                    </li>
                    <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                        <FaCheck color="#DFBE77" />
                      </div>
                      <p className="ml-3 text-md leading-5 text-gray-400">
                        Investitsiya: 5000$
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://t.me/akefxbot"
                    target="blank"
                    className="block text-center h-12 items-center w-full bg-[#DFBE77] text-[#1C1C1C] hover:bg-yellow-400/50 py-2 px-4 rounded-md text-xl font-semibold focus:outline-none transition duration-150 ease-in-out"
                  >
                    Kursga yozilish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

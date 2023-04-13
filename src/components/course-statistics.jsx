const statistics = [
  { label: "Bitiruvchilar", value: "1,200+" },
  { label: "Bitiruvchilar stabil foydada", value: "60%-70%" },
  { label: "Bitiruvchi jamoga qabul qililgan", value: "30+" },
];

export const CourseStatistics = (props) => {
  return (
    <div className="bg-[#1c1c1c] py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-white ">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-gray-100">
          Kurs statistikasi
        </h2>
        <div className="flex flex-wrap justify-between">
          {statistics.map((stat) => (
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4" key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-xl text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseStatistics;

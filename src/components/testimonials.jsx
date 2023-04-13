import TestimonialCard from "./testimonials-card";
import Testimonial2 from "../assets/images/testimonial2.jpg";

function TestimonialsSection() {
  return (
    <section className="bg-[#1C1C1C] py-16" id="testimonials">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-gray-100">
          O'quvchilarimiz fikrlari
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="Men Ake Fx ga kelib trading bo'yicha bilimlarimni mustahkamladim. O'qtuvchilarim bergan bilimlar asosida ishlab doimiy foyda qilishni boshladim. Ake Fx jamoasiga katta rahmat"
            author="Jamshid"
            image="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <TestimonialCard
            text="Men Ake fxning Gold kursida o'qib Trading bo'yicha bilimlarimmi oshirdim. Bozorda doimiy foyda qilishni o'rgandim. Natijalarim jamoaga maqul kelib Ake Fx jamoasiga qabul qilindim."
            author="Abdulaziz"
            image={Testimonial2}
          />
          <TestimonialCard
            text="Tradingga qiziqqanligim sababli You tube platformasida o'rganishga harakat qildim. Lekin to'liq bilim olish uchun Ake Fxning Gold kursiga yozildim. 2 oy mobaynida o'qituvchilarim bergan bilimlari sababli doimiy natijaga erishdim. Natijam yaxshiligi sababli Ake Fx tomonidan 100.000$ lik investitsiya berildi va meni jamoasiga qabul qilishdi."
            author="Muhammad"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

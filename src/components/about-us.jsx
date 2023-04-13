import React from "react";
import Image from "./image";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 1"
          />
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 2"
          />
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 3"
          />
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 4"
          />
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 5"
          />
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Team Member 6"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

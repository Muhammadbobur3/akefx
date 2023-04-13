import React from "react";

const Image = ({ src, alt }) => {
  return (
    <div className="relative h-0" style={{ paddingBottom: "100%" }}>
      <img
        className="absolute w-full h-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Image;

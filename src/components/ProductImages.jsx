import React from "react";

function ProductImages({ images }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center gap-4 relative w-[70%]">
        <div>
          <img
            src={images[0]}
            alt="Product Image 1"
            className="object-cover w-[100%] h-full rotate-[-41deg] -left-64 -top-10 relative"
          />
        </div>
        <div className="absolute left-[65%] top-[40%]">
          <div className="relative h-[100px] w-[120px] ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] bg-linear-1 absolute"></div>{" "}
            <img
              src={images[0]}
              alt="Product Image 2"
              className="w-[100%] h-full relative z-10 left-[-10px] top-[-10px]"
            />
          </div>
          <div className="relative h-[100px] w-[120px] my-2 ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] -left-[105px] absolute bg-linear-2"></div>
            <img
              src={images[1]}
              alt="Product Image 3"
              className="w-[100%] h-full relative z-10 left-[-115px] top-[-10px]"
            />
          </div>
          <div className="relative h-[100px] w-[120px] ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] -left-[210px] absolute bg-linear-3"></div>
            <img
              src={images[2]}
              alt="Product Image 4"
              className="w-[100%] h-full relative z-10 left-[-212px] top-[-10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImages;

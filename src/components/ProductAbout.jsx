import { useState } from "react";

function ProductAbout() {
  const [selectedSize, setSelectedSize] = useState(40);

  return (
    <div className="">
      <p className="text-[55px] font-medium text-white">Nike Impact 4</p>
      <span className="text-[35px] font-medium text-white">$250.90</span>
      <div>
        <h4 className="text-[25px] font-medium text-white mb-2">Size</h4>
        <div className="flex gap-4">
          <span
            className={`border text-black rounded-full px-3 py-2 cursor-pointer ${
              selectedSize === 40
                ? "bg-gray-300 border-white "
                : "border-black bg-[#28292F] text-white"
            }`}
            onClick={() => setSelectedSize(40)}
          >
            40
          </span>
          <span
            className={`border text-black rounded-full px-3 py-2 cursor-pointer ${
              selectedSize === 41
                ? "bg-gray-300 border-white "
                : " border-black bg-[#28292F] text-white"
            }`}
            onClick={() => setSelectedSize(41)}
          >
            41
          </span>
          <span
            className={`border text-black rounded-full px-3 py-2 cursor-pointer ${
              selectedSize === 42
                ? "bg-gray-300 border-white "
                : "border-black bg-[#28292F] text-white"
            }`}
            onClick={() => setSelectedSize(42)}
          >
            42
          </span>
          <span
            className={`border text-black rounded-full px-3 py-2 cursor-pointer ${
              selectedSize === 43
                ? "bg-gray-300 border-white "
                : "border-black bg-[#28292F] text-white"
            }`}
            onClick={() => setSelectedSize(43)}
          >
            43
          </span>
        </div>
        <button className="bg-[#ED3B6B] rounded-[11px] w-[240px] text-[18px] py-4 font-semibold text-white my-5">BUY</button>
      </div>
    </div>
  );
}

export default ProductAbout;

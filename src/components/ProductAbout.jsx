import { useState } from "react";

function ProductAbout({ product }) {
  const [selectedSize, setSelectedSize] = useState(40);

  return (
    <div className="">
      <p className="text-[55px] font-medium text-white">{product.name}</p>
      <span className="text-[35px] font-medium text-white">
        ${product.price}
      </span>
      <div>
        <h4 className="text-[25px] font-medium text-white mb-2">Size</h4>
        <div className="flex gap-4">
          {product.sizes.map((size) => (
            <span
              className={`border text-black rounded-full px-3 py-2 cursor-pointer ${
                selectedSize === size
                  ? "bg-gray-300 border-white "
                  : "border-black bg-[#28292F] text-white"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>
        <button className="bg-[#ED3B6B] rounded-[11px] w-[240px] text-[18px] py-4 font-semibold text-white my-5">
          BUY
        </button>
      </div>
    </div>
  );
}

export default ProductAbout;

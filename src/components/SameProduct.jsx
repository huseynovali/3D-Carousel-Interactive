import React from "react";

function SameProduct({ product }) {
  return (
    <div className="relative">
      <div className="">
        <div className="w-[300px] h-[300px] border-10 border-white rounded-full absolute inset-0 m-auto"></div>
        <div>
          {product.map((item) => (
            <div key={item.id}>
              <img src={item.images[0]} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SameProduct;

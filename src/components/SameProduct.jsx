import React from "react";

function SameProduct({ products }) {
  const radius = 150;
  const startAngle = 250;
  const angleStep = 70 / (products.length - 1);

  return (
    <div className="relative">
      <div className="">
        <div className="w-[300px] h-[300px] border-10 border-white rounded-full absolute inset-0 m-auto"></div>
        <div>
          {products.map((item, idx) => {
            const angle = startAngle + idx * angleStep;
            const x = radius * Math.cos((angle * Math.PI) / 90);
            const y = radius * Math.sin((angle * Math.PI) / 90);
            return (
              <div
                key={item.id}
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(100% + ${y}px - 40px)`,
                  transform: `rotate(${angle}deg)`,
                }}
                className="mb-5 cursor-pointer absolute w-[80px] h-[80px] bg-gray-200"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className={`w-16 h-16 object-contain rotate-[-${angle}deg]`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SameProduct;

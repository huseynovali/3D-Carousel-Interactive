import React from "react";

function SameProduct({ products, currentId, onChangeProduct }) {
  const radius = 200;
  
  // Ürün seçildiğinde üst bileşene bildir
  const handleProductClick = (newId) => {
    console.log("Ürün seçildi, ID:", newId);
    if (onChangeProduct) {
      onChangeProduct(newId);
    }
  };

  return (
    <div className="relative">
      <div className="">
        <div className="absolute -right-[220px] -top-[150px] w-[300px] h-[300px] flex items-center justify-center border-15 border-gray-400 rounded-full">
          <div>
            {products.map((item, i) => {
              const angle = ((240 - i * 40) * Math.PI) / 180;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div
                  key={item.id}
                  style={{
                    transform: `translate(${x - 50}px, ${y - 40}px) rotate(${
                      (i + 1) * 55
                    }deg)`,
                  }}
                  onClick={() => handleProductClick(item.id)}
                  className={`absolute w-20 h-20 text-white flex items-center justify-center rounded-md ${
                    currentId == item.id ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    style={{ transform: `rotate(${i * -90}deg)` }}
                    className={`w-16 h-16 object-contain `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SameProduct;

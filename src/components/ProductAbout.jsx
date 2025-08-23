import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function ProductAbout({ product }) {
  const [selectedSize, setSelectedSize] = useState(40);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [nextProduct, setNextProduct] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nameRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    if (product?.id !== currentProduct?.id) {
      setNextProduct(product);
    }
  }, [product]);

  useEffect(() => {
    if (nextProduct && !isAnimating) {
      setIsAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentProduct(nextProduct);
          setNextProduct(null);
          setIsAnimating(false);
        },
      });

      tl.to([nameRef.current, priceRef.current], {
        y: -80,
        opacity: 1, 
        duration: 0.4,
        ease: "power1.out",
        stagger: 0.05,
      });

      tl.call(() => {
        setCurrentProduct(nextProduct);
      });

      tl.fromTo(
        [nameRef.current, priceRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    }
  }, [nextProduct]);

  useEffect(() => {
    if (nameRef.current && !isAnimating) {
      const tl = gsap.timeline();

      tl.fromTo(
        [nameRef.current, priceRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
          stagger: 0.05,
        }
      );
    }
  }, []);

  return (
    <div className="relative">
      <div className="h-[80px] overflow-hidden">
        <p
          ref={nameRef}
          className="text-[55px] font-medium text-white w-[500px]"
        >
          {currentProduct?.name}
        </p>
      </div>

      <div className="h-[50px] overflow-hidden mt-2 mb-4">
        <span
          ref={priceRef}
          className="text-[35px] font-medium text-white block"
        >
          ${currentProduct?.price}
        </span>
      </div>

      <div>
        <h4 className="text-[25px] font-medium text-white mb-2">Size</h4>
        <div className="flex gap-4">
          {currentProduct?.sizes?.map((size) => (
            <span
              key={size}
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
      </div>

      <button className="bg-[#ED3B6B] rounded-[11px] w-[240px] text-[18px] py-4 font-semibold text-white my-5">
        BUY
      </button>
    </div>
  );
}

export default ProductAbout;

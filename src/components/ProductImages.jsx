import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function ProductImages({ product }) {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [nextProduct, setNextProduct] = useState(null);

  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const mainImageRef = useRef(null);

  useEffect(() => {
    if (nextProduct) {
      gsap.to([imageRef.current, imageRef1.current, imageRef2.current], {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(mainImageRef.current, {
        y: -500, 
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentProduct(nextProduct);
          setNextProduct(null);

          gsap.fromTo(
            [imageRef.current, imageRef1.current, imageRef2.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1,
            }
          );

          gsap.fromTo(
            mainImageRef.current,
            { y: 300, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    }
  }, [nextProduct]);

  useEffect(() => {
    if (product?.id !== currentProduct?.id) {
      setNextProduct(product);
    }
  }, [product]);

  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center gap-4 relative w-[70%]">
        <div>
          <img
            ref={mainImageRef}
            src={currentProduct?.images[0]}
            alt="Product Image 1"
            className="object-cover w-[100%] h-full rotate-[-41deg] -left-64 -top-10 relative"
          />
        </div>
        <div className="absolute left-[65%] top-[40%]">
          <div className="relative h-[100px] w-[120px] ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] bg-linear-1 absolute"></div>
            <img
              ref={imageRef}
              src={currentProduct?.images[0]}
              alt="Product Image 2"
              className="w-[100%] h-full relative z-10 left-[-10px] top-[-10px]"
            />
          </div>
          <div className="relative h-[100px] w-[120px] my-2 ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] -left-[105px] absolute bg-linear-2"></div>
            <img
              ref={imageRef1}
              src={currentProduct?.images[1]}
              alt="Product Image 3"
              className="w-[100%] h-full relative z-10 left-[-115px] top-[-10px]"
            />
          </div>
          <div className="relative h-[100px] w-[120px] ">
            <div className="skew-x-[-45deg] bg-[#ED3B6B] h-[100px] w-[120px] -left-[210px] absolute bg-linear-3"></div>
            <img
              ref={imageRef2}
              src={currentProduct?.images[2]}
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

import BigNikeLogo from "../assets/bigNikeLogo.png";
import ProductAbout from "../components/ProductAbout";
import ProductImages from "../components/ProductImages";
import SameProduct from "../components/SameProduct";
function ProductDetail() {
  return (
    <div className="h-[calc(100vh-114px)] relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-black/30 text-[350px] font-semibold font-kanit">
          NIKE
        </p>
      </div>
      <div className="absolute  -bottom-24 -left-18 flex justify-center items-center w-[80%] h-[600px] -rotate-[12deg]">
        <img src={BigNikeLogo} alt="Big Nike Logo" className="object-cover " />
      </div>
      <div className="flex justify-between items-center h-full p-8 relative z-10 pb-20">
        <div className="product_about">
          <ProductAbout />
        </div>
        <div className="product_images">
          <ProductImages />
        </div>
        <div className="same_product">
          <SameProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

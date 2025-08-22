import BigNikeLogo from "../assets/bigNikeLogo.png";
import ProductAbout from "../components/ProductAbout";
import ProductImages from "../components/ProductImages";
import SameProduct from "../components/SameProduct";
import { data } from "../data";
function ProductDetail() {
  const id = window.location.pathname.split("/")[1];
  const product = data.find((item) => item.id === parseInt(id));
  const sameProducts = data.filter((item) => item.id !== parseInt(id));

  return (
    <div className="h-[calc(100vh-114px)] relative overflow-hidden">
      <div className="absolute inset-0  flex justify-center items-center">
        <p className="text-black/30 text-[350px] relative -top-16 font-semibold font-kanit">
          NIKE
        </p>
      </div>
      <div className="absolute  -bottom-24 -left-18 flex justify-center items-center w-[80%] h-[600px] -rotate-[12deg]">
        <img src={BigNikeLogo} alt="Big Nike Logo" className="object-cover " />
      </div>
      <div className="flex justify-between items-center h-full p-8 relative z-10 pb-20">
        <div className="product_about relative z-20">
          <ProductAbout product={product} />
        </div>
        <div className="product_images">
          <ProductImages images={product.images} />
        </div>
        <div className="same_product w-[30%]">
          <SameProduct products={sameProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

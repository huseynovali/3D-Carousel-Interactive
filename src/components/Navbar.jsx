import NikeLogo from "../assets/nikeLogo.png";
function Navbar() {
  return (
    <div className="w-full p-8 flex justify-between items-center">
      <img src={NikeLogo} alt="Nike Logo" className="w-[107px] h-[40px]" />
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex space-x-16 text-white">
            <li className="text-[25px] font-medium">
              <a href="#">Home</a>
            </li>
            <li className="text-[25px] font-medium">
              <a href="#">Offers</a>
            </li>
            <li className="text-[25px] font-medium">
              <a href="#">Collections</a>
            </li>
            <li className="text-[25px] font-medium">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-white bg-[#B6B6B6]/20 ml-16 py-[8px] px-[12px] rounded-[5px] space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 20L20 22 14 16 14 14 16 14z"></path>
            <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
            <path
              d="M13.7 12.5H14.7V16H13.7z"
              transform="rotate(-44.992 14.25 14.25)"
            ></path>
          </svg>
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center space-x-8 ml-8">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              fill="currentColor"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 7h-3V6a3 3 0 0 0-6 0v1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-7-1a1 1 0 0 1 2 0v1h-2V6zm6 13H7V9h2v1.5a1 1 0 0 0 2 0V9h2v1.5a1 1 0 0 0 2 0V9h2v10z" />
            </svg>
          </button>
          <button className="text-red-400 hover:text-red-700">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                fill="currentColor"
              />
              <path
                d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                fill="currentColor"
              />
              <path
                d="M18.6695 13.4297H16.7695C14.5895 13.4297 13.4395 14.5797 13.4395 16.7597V18.6597C13.4395 20.8397 14.5895 21.9897 16.7695 21.9897H18.6695C20.8495 21.9897 21.9995 20.8397 21.9995 18.6597V16.7597C21.9995 14.5797 20.8495 13.4297 18.6695 13.4297Z"
                fill="currentColor"
              />
              <path
                d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

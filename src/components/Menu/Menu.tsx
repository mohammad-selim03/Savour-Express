import Image from "next/image";
import "../../components/Style/style.css";
import { category1, category2, category3, category4 } from "../../..";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="max-w-screen-lg mb-20">
      <div>
        <h3 className="text-2xl font-bold mb-16 mt-16">
          Browse Our <span className="spFont text-redText ">Menu</span>
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0">
        <div className="bg-whiteText/30 w-44 md:w-52 h-20 shadow-sm shadow-darkText/30 relative flex flex-col justify-center items-center rounded-lg">
          <h4 className="text-extrabold text-sm lg:text-lg ml-4 md:ml-0">
            Daria Shetova
          </h4>
          <p className="text-xs md:text-sm text-darkText/80 ml-4 md:ml-0">
            Delicious & Spicy
          </p>
          <span className="bg-yellowText h-7 md:h-10 w-5 md:w-10 text-whiteText rounded-lg px-4 py-2 absolute top-14 md:top-10 right-0 flex items-center justify-center text-xl rounded-l-full cursor-pointer">
            +
          </span>
          <div>
            <Image
              src={category2}
              alt="category1"
              className="w-20 h-20 absolute -top-5 -left-5 md:-left-10"
            />
          </div>
        </div>
        <div className="bg-whiteText/30 w-44 md:w-52 h-20 shadow-sm shadow-darkText/30 relative flex flex-col justify-center items-center rounded-lg">
          <h4 className="text-extrabold text-sm lg:text-lg ml-4 md:ml-0">
            Daria Shetova
          </h4>
          <p className="text-xs md:text-sm text-darkText/80 ml-4 md:ml-0">
            Delicious & Spicy
          </p>
          <span className="bg-yellowText h-7 md:h-10 w-5 md:w-10 text-whiteText rounded-lg px-4 py-2 absolute top-14 md:top-10 right-0 flex items-center justify-center text-xl rounded-l-full cursor-pointer">
            +
          </span>
          <div>
            <Image
              src={category1}
              alt="category1"
              className="w-20 h-20 absolute -top-5 -left-5 md:-left-10"
            />
          </div>
        </div>
        <div className="bg-whiteText/30 w-44 md:w-52 h-20 shadow-sm shadow-darkText/30 relative flex flex-col justify-center items-center rounded-lg">
          <h4 className="text-extrabold text-sm lg:text-lg ml-4 md:ml-0">
            Daria Shetova
          </h4>
          <p className="text-xs md:text-sm text-darkText/80 ml-4 md:ml-0">
            Delicious & Spicy
          </p>
          <span className="bg-yellowText h-7 md:h-10 w-5 md:w-10 text-whiteText rounded-lg px-4 py-2 absolute top-14 md:top-10 right-0 flex items-center justify-center text-xl rounded-l-full cursor-pointer">
            +
          </span>
          <div>
            <Image
              src={category3}
              alt="category1"
              className="w-20 h-20 absolute -top-5 -left-5 md:-left-10"
            />
          </div>
        </div>
        <div className="bg-whiteText/30 w-44 md:w-52 h-20 shadow-sm shadow-darkText/30 relative flex flex-col justify-center items-center rounded-lg">
          <h4 className="text-extrabold text-sm lg:text-lg ml-4 md:ml-0">
            Daria Shetova
          </h4>
          <p className="text-xs md:text-sm text-darkText/80 ml-4 md:ml-0">
            Delicious & Spicy
          </p>
          <span className="bg-yellowText h-7 md:h-10 w-5 md:w-10 text-whiteText rounded-lg px-4 py-2 absolute top-14 md:top-10 right-0 flex items-center justify-center text-xl rounded-l-full cursor-pointer">
            +
          </span>
          <div>
            <Image
              src={category4}
              alt="category1"
              className="w-20 h-20 absolute -top-5 -left-5 md:-left-10"
            />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Menu;

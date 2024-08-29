import Image from "next/image";
import { background } from "../../..";
import { IoSendSharp } from "react-icons/io5";

const Subscribe = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <Image src={background} alt="footer" />
        <div className="text-center absolute top-0 md:top-10 left:10 md:left-[550px]">
          <h3 className="text-sm md:text-3xl font-bold text-whiteText md:text-darkText">Subscribe To Our newsLetter</h3>
          <p className="text-darkText/620 mt-0 md:mt-5 mb-1 md:mb-10 text-xs md:text-sm font-bold">
            Get updates for our new products
          </p>
          <div className="flex mt-0 md:mt-10 ml-10 md:ml-0">
            <input
              type="email"
              className="w-52 md:w-96 h-8 md:h-16 px-2 md:px-5 text-md placeholder:text-md rounded-l-lg outline-none"
              placeholder="Enter Email Address..."
            />
            <button className="h-8 md:h-16 w-32 bg-redText uppercase text-whiteText font-semibold rounded-r-lg flex items-center justify-center ">
              <span>
                <IoSendSharp className="rotate-180 m-0 text-xl" />
              </span>
              <span className="-ml-4">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

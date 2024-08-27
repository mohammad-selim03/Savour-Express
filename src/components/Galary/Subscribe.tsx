import Image from "next/image";
import { background } from "../../..";
import { IoSendSharp } from "react-icons/io5";

const Subscribe = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <Image src={background} alt="footer" />
        <div className="text-center absolute top-10 left-[550px]">
          <h3 className="text-3xl font-bold ">Subscribe To Our newsLetter</h3>
          <p className="text-darkText/620 mt-5 mb-10">
            Get updates for our new products
          </p>
          <div className="flex mt-10">
            <input
              type="email"
              className="w-96 h-16 px-5 text-md placeholder:text-md rounded-l-lg outline-none"
              placeholder="Enter Email Address..."
            />
            <button className="h-16 w-32 bg-redText uppercase text-whiteText font-semibold rounded-r-lg flex items-center justify-center ">
              <span>
                <IoSendSharp className="rotate-180 m-0" size={25} />
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

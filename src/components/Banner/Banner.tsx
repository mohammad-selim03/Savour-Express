import Image from "next/image";
import { bannerimg, container, shape1, shape2, shape3 } from "../../..";
import TopHeader from "../Header/TopHeader";
import MiddleHeader from "../Header/MiddleHeader";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="relative">
        <Image src={container} alt="bannerimg" />
        <div className="absolute top-0 left-10 sm:left-20 lg:left-40 max-w-screen-xl bg-redText rounded-b-full text-whiteText">
          <div className="sticky top-0 z-20">
            <TopHeader />
          </div>
        </div>
        <div className="absolute sm:right-20 lg:right-40 xl:right-60 min-[800px]:left-52 min-[500px]:top-0 min-[1280px]:top-[60px], max-[1820px]:top-[60px] lg:w-screen-xl bg-whiteText w-[420px] h-20 -mt-20 lg:w-[1100px] shadow-lg shadow-darkText rounded-full text-whiteText">
          <MiddleHeader />
        </div>
      </div>
      <div className="flex lg:flex-row items-center justify-center absolute top-20 lg:top-40 px-4 sm:px-10 md:px-20 lg:px-32">
        <div className="text-center lg:text-left text-md  sm:w-96 sm:mt-20">
          <h1 className="text-sm w-40  sm:text-md md:text-4xl lg:text-5xl sm:w-60 sm:mt-10 font-extrabold md:mt-16 lg:-mt-20">
            Welcome To Our <br className="hidden lg:block" /> Savour Express{" "}
            <span className="text-redText spFont">Fast Food</span> &{" "}
            <span className="text-redText font-bold">Restaurants</span>
          </h1>
          <div className="flex  items-center gap-2 md:gap-4 mt-1 md:mt-4  lg:mt-8">
            <button className="text-whiteText bg-redText px-2 md:px-5 sm:px-7 py-1 md:py-2 sm:py-3 rounded-2xl uppercase font-bold text-[8px] md:text-xl">
              book a table
            </button>
            <button className="text-whiteText bg-yellowText px-3 md:px-5 sm:px-7 py-1 md:py-2 sm:py-3 rounded-2xl uppercase font-bold text-[8px] md:text-xl">
              order now
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 mt-1 md:mt-4 lg:w-52 lg:h-32 w-10 h-6 ">
            <Image src={shape1} alt="shape one" className="w-20 md:w-32 lg:52"/>
            <Image src={shape2} alt="shape two" className="w-20 md:w-32 lg:52"/>
            <Image src={shape3} alt="shape three" className="w-20 md:w-32 lg:52"/>
          </div>
        </div>
        <Image src={bannerimg} alt="banner img" className="sm:w-20 w-32 md:w-96 lg:w-[500px] min-[1000px]:w-[600px] md:-mt-16 lg:mt-0" />
      </div>
    </div>
  );
};

export default Banner;

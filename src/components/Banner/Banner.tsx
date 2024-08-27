import Image from "next/image";
import { bannerimg, container, shape1, shape2, shape3 } from "../../..";
import Container from "@/Container/Container";
import TopHeader from "../Header/TopHeader";
import MiddleHeader from "../Header/MiddleHeader";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <Image src={container} alt="bannerimg " />
        <div className="absolute top-0 left-40 max-w-screen-xl bg-redText rounded-b-full text-whiteText ">
         <div className="sticky top-0 z-20"> <TopHeader /></div>
        </div>
        <div className="absolute top-[60px] right-80 max-w-screen-xl bg-whiteText shadow-lg shadow-darkText rounded-full text-whiteText">
          <MiddleHeader />
        </div>
      </div>
      <div className="flex items-center justify-center absolute top-40 px-20 ">
        <div>
          <h1 className="text-7xl font-extrabold mt-10">
            Welcome To Our <br /> Savour Express{" "}
            <span className="text-redText spFont">Fast Food</span>  &{" "}
            <span className="text-redText font-">Restaurants</span>
          </h1>
          <div className="flex items-center gap-10  mt-8">
            <button className="text-whiteText bg-redText px-7 py-3 rounded-2xl uppercase font-bold">
              book a table
            </button>
            <button className="text-whiteText bg-yellowText px-7 py-3 rounded-2xl uppercase font-bold">
              order now
            </button>
          </div>
          <div className="flex items-center gap-6">
            <Image src={shape1} alt="shape one" />
            <Image src={shape2} alt="shape one" />
            <Image src={shape3} alt="shape one" />
          </div>
        </div>
        <Image src={bannerimg} alt="banner img" className="max-w-2xl" />
      </div>
    </div>
  );
};

export default Banner;

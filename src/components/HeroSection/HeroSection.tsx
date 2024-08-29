import Image from "next/image";
import { heroBanner, heroshape1, heroshape2, logo } from "../../..";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center max-w-screen-xl relative">
      <div>
        <Image src={heroBanner} alt="hero-baner" />
      </div>
      <div className="max-w-screen-sm">
        <div className="w-52 md:w-full">
        <div className="flex items-center gap-2 mb-3">
          <Image src={logo} alt="logo" className="h-6 md:h-10 w-6 md:w-10 m-0"/>
          <p className="text-sm text-redText font-semibold m-0">Our Stroy</p>
        </div>
          <h2 className="text-sm md:text-3xl  font-bold">
            The Savour Express has excellent of <br />{" "}
            <span className="text-redText">Quality Foods</span>
          </h2>
          <p className="mt-2 mb-2 text-[8px] md:text-sm">
            Compellingly supply professional material rather than out-of-the-box
            process improvements. Phosfluorescently communicate premium
            mindshare and extensive imperatives. Dynamically fashion.{" "}
          </p>
          <p className="text-xs md:text-sm hidden md:inline-flex flex-col ">
            Seamlessly conceptualize sticky functionalities after prospective
            data. Interactively unleash customized supply chains whereas goal
            oriented paradigm. Credibly reintermediate client-focused model for.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <button className="bg-redText text-whiteText px-3 md:px-6 py-1 md:py-3 rounded-xl uppercase font-semibold text-[7px] md:text-lg">discover more</button>
          <div className="flex  items-center gap-2">
            <h1 className="text-2xl md:text-5xl font-bold text-redText">24</h1>
            <div>
              <p className="text-lightText uppercase font-sm font-semibold text-xs md:text-sm">years of </p>
              <h4 className="text-sm md:text-xl font-bold uppercase">experience</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src={heroshape1} alt="heroshape1" className="absolute top-0 left-0 w-14 md:w-20" />
        </div>
        <div className="mt-20 md:mt-0">
          <Image src={heroshape2} alt="heroshape1" className="absolute -bottom-20 md:bottom-0 right-0 w-14 md:w-20 "  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

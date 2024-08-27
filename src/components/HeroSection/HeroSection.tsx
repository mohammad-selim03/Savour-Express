import Image from "next/image";
import { heroBanner, heroshape1, heroshape2, logo } from "../../..";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center max-w-screen-xl relative">
      <div>
        <Image src={heroBanner} alt="hero-baner" />
      </div>
      <div className="max-w-screen-sm">
        <div className="flex items-center gap-2 mb-3">
          <Image src={logo} alt="logo" className="h-10 w-10 m-0"/>
          <p className="text-lg text-redText font-semibold m-0">Our Stroy</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            The Savour Express has excellent of <br />{" "}
            <span className="text-redText">Quality Foods</span>
          </h2>
          <p className="mt-2 mb-2">
            Compellingly supply professional material rather than out-of-the-box
            process improvements. Phosfluorescently communicate premium
            mindshare and extensive imperatives. Dynamically fashion.{" "}
          </p>
          <p>
            Seamlessly conceptualize sticky functionalities after prospective
            data. Interactively unleash customized supply chains whereas goal
            oriented paradigm. Credibly reintermediate client-focused model for.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <button className="bg-redText text-whiteText px-6 py-3 rounded-xl uppercase font-semibold">discover more</button>
          <div className="flex  items-center gap-2">
            <h1 className="text-5xl font-bold text-redText">24</h1>
            <div>
              <p className="text-lightText uppercase font-sm font-semibold">years of </p>
              <h4 className="text-xl font-bold uppercase">experience</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src={heroshape1} alt="heroshape1" className="absolute top-0 left-0 w-20" />
        </div>
        <div>
          <Image src={heroshape2} alt="heroshape1" className="absolute bottom-0 right-0 w-20"  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

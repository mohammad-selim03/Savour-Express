import Image from "next/image";
import { logo, sectionBg } from "../../..";

const SecondHeroSect = () => {
  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <div>
        <Image src={sectionBg} alt="section-bg" />
      </div>
      <div className="absolute top-10 right-52 flex flex-col items-center ">
        <div className="flex items-center gap-2 text-center" >
          <Image src={logo} alt="logo" className="w-10 h-10 m-0" />
          <p className="text-md text-redText font-bold">Our Strength</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">Our Most Loved <span className="text-redText">Foods</span></h2>
          <p className="text-darkText/40">Objectively pontificate models before intuitive information. Dramatically recaptiualize multifunctional materials.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSect;

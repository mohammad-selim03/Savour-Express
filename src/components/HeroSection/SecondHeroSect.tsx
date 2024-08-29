import Image from "next/image";
import {food1, food2, food3, sectionBg } from "../../..";

const SecondHeroSect = () => {
  return (
    <div className="max-w-screen-2xl mx-auto relative mt-32">
      <div>
        <Image src={sectionBg} alt="section-bg" className="h-screen md:h-[550px]" />
      </div>
      <div className="absolute top-20 right-0 md:right-[450px] max-w-xl ">
        <div>
          <p className="text-md text-redText font-bold text-center">
            Our Strength
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center">
            Our Most Loved <span className="text-redText">Foods</span>
          </h2>
          <p className="text-darkText/40 text-center">
            Objectively pontificate models before intuitive information.
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>
      </div>
      <div className="absolute top-60  md:top-64 right-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
        <div className="ml-5 md:ml-0">
          <Image src={food1} alt="food one" />
          <div className="max-w-scree-sm text-center">
            <h4 className="text-2xl font-bold mt-2 mb-2">Fast Foods</h4>
            <p className="text-sm w-96 text-darkText/70">
              Professionally fabricate e-business vortals and <br /> impactful core
              competencie. Compellingly <br /> impact technically sound
            </p>
          </div>
        </div>
        <div className="ml-5 md:ml-0">
          <Image src={food2} alt="food two" />
          <div className="max-w-scree-sm text-center">
            <h4 className="text-2xl font-bold mt-2 mb-2">Healthy Foods</h4>
            <p className="text-sm w-96 text-darkText/70">
              Professionally fabricate e-business vortals and impactful <br /> core
              competencie. Compellingly <br /> impact technically sound
            </p>
          </div>
        </div>
        <div className="ml-4 md:ml-0">
          <Image src={food3} alt="food three" />
          <div className="max-w-scree-sm text-center">
            <h4 className="text-2xl font-bold mt-2 mb-2">Hygenic Foods</h4>
            <p className="text-sm w-96 text-darkText/70">
              Professionally fabricate e-business vortals and impactful <br /> core
              competencie. Compellingly <br /> impact technically sound
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default SecondHeroSect;

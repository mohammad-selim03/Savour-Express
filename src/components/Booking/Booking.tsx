import Image from "next/image";
import { bookSection } from "../../..";

const Booking = () => {
  return (
    <div className="mt-20 ">
      <div className="relative ">
        <Image src={bookSection} alt="booking  w-96" />
        <div className="absolute top-0 md:top-10 left-5 md:left-64 text-whiteText text-center py-10 p-10">
          <div className="absolute top-2 -left-52 md:left-32 w-[850px] ">
            <h2 className="text-md md:text-5xl font-bold">
              Book A Table <span className="text-redText">Now</span>
            </h2>
            <p className="text-lightText mt-0 md:mt-2 mb-10 text-[8px] md:text-sm">
              Objectively pontificate quality models before intuitive
              information. Dramatically <br />
              recaptiualize multifunctional materials.
            </p>
          </div>
          <form action="">
            <div className="absolute top-16 md:top-32 left-5 md:left-[60px] w-[350px] md:w-[1000px]">
              <div className="grid grid-cols-3 md:grid-cols-3  gap-2 md:gap-32  ">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-32 md:w-60 h-4 text-xs md:text-sm md:h-14 border border-darkText/40 text-darkText rounded-md px-5 "
                />
                <input
                  type="time"
                  placeholder="Select Time"
                  className="w-24 ml-4 md:ml-0 md:w-60 h-4 text-xs md:text-sm md:h-14 border border-darkText/40 text-darkText rounded-md px-5 "
                />
                <input
                  type="number"
                  placeholder="Total Guest"
                  className="w-24 md:w-60 h-4 text-xs md:text-sm md:h-14 border border-darkText/40 text-darkText rounded-md px-5 "
                />
              </div>

              <input
                type="text"
                placeholder="Messages..."
                className="w-[330px] -ml-4 md:-ml-0 md:w-[990px] h-8 md:h-40 px-5 mt-1 md:mt-10 rounded-md text-darkText"
              />
              <div className="w-32 mx-auto mt-0 md:mt-5">
                <p className="bg-redText h-5 md:h-16 md:px-18 w-24 md:w-60  py-1 md:py-4 font-bold rounded-full text-whiteText uppercase ml-6 md:-ml-20 text-[8px]  md:text-lg">
                  submit request
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

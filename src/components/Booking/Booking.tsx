import Image from "next/image";
import { bookSection } from "../../..";

const Booking = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <Image src={bookSection} alt="booking bg" />
        <div className="absolute top-10 left-64 text-whiteText text-center">
          <div className="absolute top-0 left-16 w-[850px] ">
            <h2 className="text-2xl font-bold">
              Book A Table <span className="text-redText">Now</span>
            </h2>
            <p className="text-lightText mt-2 mb-10">
              Objectively pontificate quality models before intuitive
              information. Dramatically <br />
              recaptiualize multifunctional materials.
            </p>
          </div>
          <form action="">
            <div className="absolute top-32 left-[70px]">
              <div className="grid grid-cols-1 md:grid-cols-3  gap-32">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-52 h-10 border border-darkText/40 text-darkText rounded-md px-5 "
                />
                <input
                  type="time"
                  placeholder="Select Time"
                  className="w-52 h-10 border border-darkText/40 text-darkText rounded-md px-5 "
                />
                <input
                  type="number"
                  placeholder="Total Guest"
                  className="w-52 h-10 border border-darkText/40 text-darkText rounded-md px-5 "
                />
              </div>

              <input
                type="text"
                placeholder="Messages..."
                className="w-[900px] h-40 px-5 mt-10 rounded-md text-darkText"
              />
              <div className="w-32 mx-auto mt-5">
                <button className="bg-redText px-18 w-52  py-4 font-bold rounded-full text-whiteText uppercase -ml-10">
                  submit request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

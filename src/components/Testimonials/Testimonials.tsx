import Image from "next/image";
import {
  category2,
  quote,
  tablist,
  testimonialFood,
  testimonialTree,
  user,
} from "../../..";
import { IoMdStar } from "react-icons/io";

const Testimonials = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-center mt-10 mb-10">
            <p className="text-redText font-bold">Testimonials</p>
            <h3 className="text-2xl font-bold mb-3">
              Our Customar <span className="text-redText">Feedbacks</span>
            </h3>
            <p className="text-xs text-lightText">
              Objectively pontificate quality models before intuitive
              information. Dramatically <br />
              recaptiualize multifunctional materials.
            </p>
          </div>
          <div className="flex items-center p-3 md:p-0">
            <div>
              <Image src={tablist} alt="tablist" />
            </div>
            <div className="bg-whiteText rounded-xl shadow-lg shadow-darkText/40 w-[270px] md:w-[420px] h-44 md:h-72 px-5 overflow-hidden">
              <Image src={quote} alt="quote" className="w-10 md:w-16" />
              <p className="text-darkText/80 mt-0 md:mt-6 text-xs md:text-sm ">
                “Synergistically strategize interdependent <br />
                ROI through distinctive markets. Credibly <br />
                restore one-to-one through.”
              </p>

              <div className="flex -mt-6 items-center justify-center">
                <div>
                  <span className="text-yellowText flex items-center  w-28 mb-1 mt-5 md:mt-0 md:mb-5">
                    <IoMdStar size={20} /> <IoMdStar size={20} />{" "}
                    <IoMdStar size={20} /> <IoMdStar size={20} />{" "}
                    <IoMdStar size={20} />
                  </span>
                  <div className="flex items-center gap-3 w-40">
                    <Image
                      src={user}
                      alt="user"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h3 className="text-sm font-bold">Richard Kok</h3>
                      <p className="text-darkText/60 text-[10px] font-semibold uppercase">
                        California, Usa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-10">
                  <Image
                    src={category2}
                    alt="review photo"
                    className="w-52 mt-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center ">
              <Image src={testimonialTree} alt="tree" className="relative ml-0 md:ml-20 w-52 md:w-full" />
              <Image
                src={testimonialFood}
                alt="testimonial bg "
                className="absolute w-52 md:w-[650px] -ml-3 md:-ml-0"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonials;

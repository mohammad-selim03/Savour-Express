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
          <div className="flex items-center">
            <div>
              <Image src={tablist} alt="tablist" />
            </div>
            <div className="bg-whiteText rounded-xl shadow-lg shadow-darkText/40 w-[420px] h-72 px-5 overflow-hidden">
              <Image src={quote} alt="quote" />
              <p className="text-darkText/80 mt-6">
                “Synergistically strategize interdependent <br />
                ROI through distinctive markets. Credibly <br />
                restore one-to-one through.”
              </p>

              <div className="flex -mt-6 items-center justify-center">
                <div>
                  <span className="text-yellowText flex items-center  w-28 mb-5">
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
              <Image src={testimonialTree} alt="tree" className="relative ml-20" />
              <Image
                src={testimonialFood}
                alt="testimonial bg "
                className="absolute "
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

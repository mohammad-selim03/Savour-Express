import Image from "next/image";
import { blog1, blog2, blog3, chicken, containerfruit } from "../../..";
import { FaRegComments, FaRegUser, FaTag } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";

const Blog = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-redText font-bold">News & Blogs</p>
        <h2 className="text-4xl font-bold mt-10 mb-10">
          Our Latest Foods <span className="text-redtext">News</span>
        </h2>
        <p className="text-xs text-darkText/60 mb-10">
          Objectively pontificate quality models before intuitive information.
          Dramatically <br />
          recaptiualize multifunctional materials.
        </p>
      </div>
      <div className="max-w-screen-xl relative">
        <div className="grid grid-cols-3 gap-1 relative ">
          <div className="w-[340px] h-[450px] rounded-xl shadow-darkText/30 shadow-lg ">
            <div>
              <Image src={blog1} alt="blog-one" className="rounded-xl" />
              <div className="flex items-center gap-3 mt-4">
                <span className="flex items-center gap-2 text-[10px]">
                  <FaRegUser size={18} className="text-redText" />
                  By Savour Express
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <CgCalendarDates size={25} className="text-redText" />
                  15 August, 2024
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <FaTag size={20} className="text-redText" />
                  chicken
                </span>
              </div>
              <h3 className="text-2xl font-bold mt-10 px-3">
                10 Reasons To Do A Digital Detox Challenge
              </h3>
              <div className="flex items-center justify-between mt-10 px-3">
                <p className="text-xs font-semibold uppercase">read more</p>
                <p className="text-xs font-semibold uppercase flex items-center gap-1 w-32">
                  <FaRegComments size={18} className="text-redText" /> 3
                  comments
                </p>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[450px] rounded-xl shadow-darkText/30 shadow-lg ">
            <div>
              <Image src={blog3} alt="blog-one" className="rounded-xl" />
              <div className="flex items-center gap-3 mt-4">
                <span className="flex items-center gap-2 text-[10px]">
                  <FaRegUser size={18} className="text-redText" />
                  By Savour Express
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <CgCalendarDates size={25} className="text-redText" />
                  15 August, 2024
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <FaTag size={20} className="text-redText" />
                  chicken
                </span>
              </div>
              <h3 className="text-2xl font-bold mt-10 px-3">
                10 Reasons To Do A Digital Detox Challenge
              </h3>
              <div className="flex items-center justify-between mt-10 px-3">
                <p className="text-xs font-semibold uppercase">read more</p>
                <p className="text-xs font-semibold uppercase flex items-center gap-1 w-32">
                  <FaRegComments size={18} className="text-redText" /> 3
                  comments
                </p>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[450px] rounded-xl shadow-darkText/30 shadow-lg ">
            <div>
              <Image src={blog2} alt="blog-one" className="rounded-xl" />
              <div className="flex items-center gap-3 mt-4">
                <span className="flex items-center gap-2 text-[10px]">
                  <FaRegUser size={18} className="text-redText" />
                  By Savour Express
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <CgCalendarDates size={25} className="text-redText" />
                  15 August, 2024
                </span>
                <span className="flex items-center gap-2 text-[10px]">
                  <FaTag size={20} className="text-redText" />
                  chicken
                </span>
              </div>
              <h3 className="text-2xl font-bold mt-10 px-3">
                10 Reasons To Do A Digital Detox Challenge
              </h3>
              <div className="flex items-center justify-between mt-10 px-3">
                <p className="text-xs font-semibold uppercase">read more</p>
                <p className="text-xs font-semibold uppercase flex items-center gap-1 w-32">
                  <FaRegComments size={18} className="text-redText" /> 3
                  comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={containerfruit}
            alt="bg fruit"
            className="w-40 absolute top-40 -left-40"
          />
        </div>
        <div>
          <Image
            src={chicken}
            alt="bg chicken"
            className="w-40 absolute top-40 -right-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

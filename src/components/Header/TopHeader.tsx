import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className=" items-center justify-between py-4 px-1 lg:px-32 hidden xl:flex">
      <div className="px-10 flex  items-center gap-5 ">
        <p className="flex items-center gap-3 text-xs md:text-sm">
          <span className="bg-whiteText/40 flex items-center justify-center rounded-full h-7 w-7"><FaLocationDot /></span> Eskaton Road, Dhaka, Bangladesh
        </p>
        <p className="flex items-center gap-3">
        <span className="bg-whiteText/40 flex items-center justify-center rounded-full h-7 w-7"><IoCall /></span> +(880)555 999 7778
        
        </p>
        <p className="flex items-center gap-3">
        <span className="bg-whiteText/40 flex items-center justify-center rounded-full h-7 w-7"><MdEmail /></span> info@savour.com
         
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-whiteText/40 h-7 w-7 flex items-center justify-center rounded-full">
          <FaFacebookF />
        </span>
        <span className="bg-whiteText/40 h-7 w-7 flex items-center justify-center rounded-full">
          <FaTwitter />
        </span>

        <span className="bg-whiteText/40 h-7 w-7 flex items-center justify-center rounded-full">
          <FaInstagram />
        </span>
        <span className="bg-whiteText/40 h-7 w-7 flex items-center justify-center rounded-full">
          <FaYoutube />
        </span>
        <span className="bg-whiteText/40 h-7 w-7 flex items-center justify-center rounded-full">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
};

export default TopHeader;

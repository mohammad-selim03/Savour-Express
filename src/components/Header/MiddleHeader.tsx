import Image from "next/image";
import Link from "next/link";
import { FaOpencart, FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { logo } from "../../..";
import { MdOutlineShoppingBag } from "react-icons/md";

const MiddleHeader = () => {
  const menus = [
    {
      title: "home",
      link: "/home",
    },
    // {
    //   title: "about",
    //   link: "/about",
    // },
    {
      title: "menu",
      link: "/menu",
    },
    // {
    //   title: "shop",
    //   link: "/shop",
    // },
    {
      title: "blog",
      link: "/blog",
    },
    {
      title: "contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-5 py-6 px-20 ">
      <div>
        <p className="text:xs md:text-md lg:text-xl font-extrabold text-darkText flex items-center gap-2"><span className="-mt-2"><Image src={logo} alt="logo" className="w-10 h-10 hidden md:inline-flex"/></span> <span className="text-sm text-redText spFont">Savour Express</span></p>
      </div>
      <div className="flex items-center gap-2 md:gap-5">
        {menus?.map((menu, index) => (
          <div key={index}>
            <Link href={menu?.link} >
              <p className="text-darkText font-semibold capitalize text-sm md:text-md lg:text-lg">
                {menu?.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5 text-darkText">
        <span className="border border-darkText/20 h-10 w-10 hidden md:flex items-center justify-center rounded-full ">
          {" "}
          <IoSearch size={20} />{" "}
        </span>
        
        <span className="border border-darkText/20 h-10 w-10 flex items-center justify-center rounded-full"><MdOutlineShoppingBag size={22} /></span>
        <span className="border border-darkText/20 h-10 w-10 flex items-center justify-center rounded-full">
          <FaRegUser size={18} />
        </span>
      </div>
    </div>
  );
};

export default MiddleHeader;

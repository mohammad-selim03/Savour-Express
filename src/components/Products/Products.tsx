import Image from "next/image";
import Link from "next/link";
import { category1, chilibg } from "../../..";
import { IoMdStarOutline } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
  const menus = [
    {
      title: "all menus",
      link: "/all-menus",
    },
    {
      title: "burger",
      link: "/burger",
    },
    {
      title: "chicken",
      link: "/chicken",
    },
    {
      title: "burger",
      link: "/burger",
    },
    {
      title: "pizza",
      link: "/pizza",
    },
    {
      title: "sandwich",
      link: "/sandwich",
    },
    {
      title: "deserts",
      link: "/deserts",
    },
  ];
  return (
    <div className="max-w-screen-xl mt-60">
      <div className="relative">
        <div className="text-center">
          <p className="text-redText font-bold">Popular Menu</p>
          <h2 className="text-4xl font-bold">
            Our Popular Delicious <span className="text-redText">Foods</span>
          </h2>
          <p className="text-darkText/70 mt-2 mb-2">
            Objectively pontificate quality models before intuitive information.
            Dramatically <br />
            recaptiualize multifunctional materials.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-8 max-w-screen-lg">
          {menus?.map((menu, index) => (
            <Link href={menu?.link} key={index}>
              {" "}
              <p className="hover:bg-redText hover:text-whiteText border border-darkText/40 hover:border-redText rounded-2xl w-36 h-10 flex items-center justify-center uppercase font-semibold">
                {menu?.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5  ">
          <div className="w-52 md:w-60 h-[400px] py-4 cursor-pointer bg-whiteText/50 shadow-darkText/20  shadow-xl rounded-full p-2 relative">
            <Image src={category1} alt="product1" />
            <div className="text-center text-darkText  flex flex-col gap-2 ">
              <p className="text-xs text-dartText/40">Chiken</p>
              <span className="flex items-center px-10 text-yellowText">
                <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />{" "}
                <IoMdStarOutline /> <IoMdStarOutline /> <span className="text-xs mt-0.5 text-darkText">(4.00)</span>
              </span>
              <p className="text-lg font-bold">Daria Shevtsova</p>
              <p className="text-sm font-semibold text-redText">$80.85</p>
              <span className="absolute bottom-10 right-16 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><FiShoppingCart size={18}/></span>
              <span className="absolute bottom-10 right-28 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><GrFavorite size={18} /></span>
            </div>
          </div>
          <div className="w-52 md:w-60 h-[400px] py-4 cursor-pointer bg-whiteText/50 shadow-darkText/20  shadow-xl rounded-full p-2 relative">
            <Image src={category1} alt="product1" />
            <div className="text-center text-darkText  flex flex-col gap-2 ">
              <p className="text-xs text-dartText/40">Chiken</p>
              <span className="flex items-center px-10 text-yellowText">
                <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />{" "}
                <IoMdStarOutline /> <IoMdStarOutline /> <span className="text-xs mt-0.5 text-darkText">(4.00)</span>
              </span>
              <p className="text-lg font-bold">Daria Shevtsova</p>
              <p className="text-sm font-semibold text-redText">$80.85</p>
              <span className="absolute bottom-10 right-16 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><FiShoppingCart size={18}/></span>
              <span className="absolute bottom-10 right-28 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><GrFavorite size={18} /></span>
            </div>
          </div>
          <div className="w-52 md:w-60 h-[400px] py-4 cursor-pointer bg-whiteText/50 shadow-darkText/20  shadow-xl rounded-full p-2 relative">
            <Image src={category1} alt="product1" />
            <div className="text-center text-darkText  flex flex-col gap-2 ">
              <p className="text-xs text-dartText/40">Chiken</p>
              <span className="flex items-center px-10 text-yellowText">
                <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />{" "}
                <IoMdStarOutline /> <IoMdStarOutline /> <span className="text-xs mt-0.5 text-darkText">(4.00)</span>
              </span>
              <p className="text-lg font-bold">Daria Shevtsova</p>
              <p className="text-sm font-semibold text-redText">$80.85</p>
              <span className="absolute bottom-10 right-16 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><FiShoppingCart size={18}/></span>
              <span className="absolute bottom-10 right-28 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><GrFavorite size={18} /></span>
            </div>
          </div>
          <div className="w-52 md:w-60 h-[400px] py-4 cursor-pointer bg-whiteText/50 shadow-darkText/20  shadow-xl rounded-full p-2 relative">
            <Image src={category1} alt="product1" />
            <div className="text-center text-darkText  flex flex-col gap-2 ">
              <p className="text-xs text-dartText/40">Chiken</p>
              <span className="flex items-center px-10 text-yellowText">
                <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />{" "}
                <IoMdStarOutline /> <IoMdStarOutline /> <span className="text-xs mt-0.5 text-darkText">(4.00)</span>
              </span>
              <p className="text-lg font-bold">Daria Shevtsova</p>
              <p className="text-sm font-semibold text-redText">$80.85</p>
              <span className="absolute bottom-10 right-16 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><FiShoppingCart size={18}/></span>
              <span className="absolute bottom-10 right-28 bg-redText cursor-pointer h-8 w-8 text-whiteText flex items-center justify-center rounded-full px-2 py-2"><GrFavorite size={18} /></span>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <button className="bg-redText px-10 py-4 text-whiteText font-semibold rounded-full uppercase">View All Menus</button>
        </div>
        <div>
          <Image src={chilibg} alt="chili-bg" className="absolute -top-52 left-0" />
        </div>
      </div>
    </div>
  );
};

export default Products;

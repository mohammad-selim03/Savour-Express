import Image from "next/image";
import { footer } from "../../..";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 mt-20">
      <div>
        <Image src={footer} alt="footer" className="relative"/>
      </div>
      <div className="col-span-6">
        <h3 className="text-xl font-bold">About Restaurant</h3>
        <p className="text-darkText">
          Quickly supply alternative strategic theme areas vis-a-vis B2C
          mindshare. Objectively repurpose stand-alone synergy via user-centric
          architectures.
        </p>
        <div>
          {/* social icons  */}
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="text-xl font-bold">Quick Links</h3>

      </div>
      <div className="col-span-2">
        <h3 className="text-xl font-bold">Our Menu</h3>

      </div>
      <div className="col-span-2">
      <h3 className="text-xl font-bold">Contact Now</h3>
      </div>
    </div>
  );
};

export default Footer;

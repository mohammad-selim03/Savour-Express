import Banner from "@/components/Banner/Banner";
import Booking from "@/components/Booking/Booking";
import BottomFooter from "@/components/Footer/BottomFooter";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Galary/Blog";
import FoodsGalary from "@/components/Galary/FoodsGalary";
import Subscribe from "@/components/Galary/Subscribe";
import HeroSection from "@/components/HeroSection/HeroSection";
import SecondHeroSect from "@/components/HeroSection/SecondHeroSect";
import Menu from "@/components/Menu/Menu";
import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Menu />
      <HeroSection />
      <SecondHeroSect />
      <Products />
      <Booking />
      <Testimonials />
      <FoodsGalary />
      <Blog />
      <Subscribe />
      <Footer />
      <BottomFooter />
    </div>
  );
}

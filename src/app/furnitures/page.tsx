import Navbar from "@/customComponents/navbar";
import { HeroCarousel } from "@/app/furnitures/hero-carousel";
import { NavigationBar } from "@/customComponents/navigation-bar";
import { NewArrivals } from "@/app/furnitures/new-arrivals";
import { ShopCategories } from "@/app/furnitures/shop-categories";
import { FurnitureRange } from "./furniture-range";
import Footer from "@/customComponents/Footer";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "MEGA SALE",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    discount: "50%"
  },
  {
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "NEW COLLECTION",
    subtitle: "Discover our latest furniture designs crafted for modern living spaces.",
    discount: "30%"
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "LUXURY ITEMS",
    subtitle: "Elevate your home with our premium selection of handcrafted furniture.",
    discount: "20%"
  }
];

export default function Home() {
  return (
    <main>
       <Navbar/>
       <NavigationBar/>
      <div className="container mx-auto px-2 sm:px-14 lg:px-20">
        <HeroCarousel slides={heroSlides} />
      </div>
      <h2 className="text-xl  sm:text-2xl font-semibold underline text-center mb-4 sm:mb-6 md:mb-8 uppercase tracking-wider">
        New Arrivals
      </h2>
      <div className="bg-white">
        <NewArrivals />
      </div>
      <ShopCategories/>
      <FurnitureRange/>
      <Footer/>
    </main>
  );
}
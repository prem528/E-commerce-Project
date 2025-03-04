import Navbar from "@/customComponents/navbar";
import Image from "next/image";
import { Truck } from "lucide-react";
import { NavigationBar } from "@/customComponents/navigation-bar";

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* Thin Strip over Navbar */}
      <div className="w-full lg:h-8 h-fit flex justify-between lg:px-10 py-2">
        <div className="flex-col">
          <p className="text-sm font-semibold">
            Contact <span>+914343456673</span>
          </p>
        </div>

        <div className="flex-col">
          <p className="font-semibold">GET 50% OFF ON SELECTED ITEMS | SHOP NOW</p>
        </div>

        <div className="flex-col">
          <p className="font-semibold">Exclusive range | Service Promise </p>
        </div>
      </div>

      {/* NavBar */}
      <div className="w-full h-max">
        <Navbar />
      </div>

      {/* CATEGORY */}
      <NavigationBar/>
       

      {/* BANNER CAROUSEL */}
      <div className="w-[95%] mx-auto mt-8">
        <Image
          src="/homepage/banner.png"
          width={500}
          height={1000}
          alt="banner"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* FEATURES */}
      <div className="w-full mx-auto bg-white grid-cols-4 grid gap-20 px-40 py-20 mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Truck color="green" className="w-8 h-8" />
            <span className="text-2xl">Free Shipping</span>
          </div>
          <span className=" text-gray-500">
            You can edit text on your webiste by double clicking on a text box
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Truck color="green" className="w-8 h-8" />
            <span className="text-2xl">20 Days Return</span>
          </div>
          <span className=" text-gray-500">
            You can edit text on your webiste by double clicking on a text box
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Truck color="green" className="w-8 h-8" />
            <span className="text-2xl">24x7 Support</span>
          </div>
          <span className=" text-gray-500">
            You can edit text on your webiste by double clicking on a text box
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Truck color="green" className="w-8 h-8" />
            <span className="text-2xl">Secure Payment</span>
          </div>
          <span className=" text-gray-500">
            You can edit text on your webiste by double clicking on a text box
          </span>
        </div>
      </div>

      {/* ALL SHOPPING ITEMS */}
      <div className="w-[85%] mx-auto mt-12 flex flex-col justify-center gap-14">
        <h1 className="underline text-5xl font-semibold text-center">
          All Shopping Items
        </h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 place-items-center w-full">
          <div className="w-[95%] border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="relative w-full h-72">
              <Image
                src="/homepage/furniture.png" // Ensure the image is placed in the public folder or use an imported path
                alt="Jodhpur Dining Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">JODHPURI DINING SET</h2>
              <p className="text-gray-600 text-md font-medium">₹ 8999</p>
            </div>
          </div>
          <div className="w-[95%] border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="relative w-full h-72">
              <Image
                src="/homepage/furniture.png" // Ensure the image is placed in the public folder or use an imported path
                alt="Jodhpur Dining Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">JODHPURI DINING SET</h2>
              <p className="text-gray-600 text-md font-medium">₹ 8999</p>
            </div>
          </div>
          <div className="w-[95%] border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="relative w-full h-72">
              <Image
                src="/homepage/furniture.png" // Ensure the image is placed in the public folder or use an imported path
                alt="Jodhpur Dining Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">JODHPURI DINING SET</h2>
              <p className="text-gray-600 text-md font-medium">₹ 8999</p>
            </div>
          </div>
          <div className="w-[95%] border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="relative w-full h-72">
              <Image
                src="/homepage/furniture.png" // Ensure the image is placed in the public folder or use an imported path
                alt="Jodhpur Dining Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">JODHPURI DINING SET</h2>
              <p className="text-gray-600 text-md font-medium">₹ 8999</p>
            </div>
          </div>
          <div className="w-[95%] border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="relative w-full h-72">
              <Image
                src="/homepage/furniture.png" // Ensure the image is placed in the public folder or use an imported path
                alt="Jodhpur Dining Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">JODHPURI DINING SET</h2>
              <p className="text-gray-600 text-md font-medium">₹ 8999</p>
            </div>
          </div>
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="w-[85%] mx-auto mt-18 flex flex-col justify-center gap-20">
        <h1 className="underline text-5xl font-semibold text-center">
          Shop By Category
        </h1>

        {/* Main Layout Container */}
        <div className="flex gap-2 w-[90%] max-h-[500px] mx-auto">
          {/* Left Card - Kids Category */}
          <div className="relative w-[50%] bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image */}
            <Image
              src="/homepage/kids.png"
              alt="Kids Learning Toys"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-white bg-opacity-90 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Where Fun Meets Style – Perfect Toys & Accessories for Happy
                Kids!
              </h2>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:underline font-medium"
              >
                shop now
              </a>
            </div>
          </div>

          {/* Right Section - Two Stacked Cards */}
          <div className="w-[50%] flex flex-col gap-2">
            {/* Upper Right Card */}
            <div className="relative w-full h-[50%] shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/homepage/image.png"
                alt="Wooden Furniture"
                className="w-full h-full object-cover"
                width={1000}
                height={500}
              />
              <div className="absolute top-0 right-0 w-1/2 p-4 bg-white bg-opacity-90">
                <h2 className="text-lg font-semibold text-gray-700">
                  Wooden Finish Beds, Dining Tables, Chairs
                </h2>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:underline font-medium"
                >
                  shop now
                </a>
              </div>
            </div>

            {/* Lower Right Card */}
            <div className="relative w-full h-[50%] shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/homepage/image2.png"
                alt="Home Decor"
                className="w-full h-full object-cover"
                width={1000}
                height={500}
              />
              <div className="absolute top-0 right-0 w-1/2 p-4 bg-white bg-opacity-90">
                <h2 className="text-lg font-semibold text-gray-700">
                  Good Vibes, Great Products - Find Your Perfect Strain
                </h2>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:underline font-medium"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full mt-10">
        <Image
          src={"/homepage/footer.png"}
          alt="footer"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </div>
  );
}

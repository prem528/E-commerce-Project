import Image from "next/image";
import Link from "next/link";
// import {Search} from "lucide-react";

export default function Navbar() {
    return (
        <div className="w-full bg-[#5A4A3EFA] flex flex-col sm:flex-row items-center py-2 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-10 gap-4 sm:gap-0 sm:justify-between">
            {/* Logo and Name */}
            <Link href="/">
            <div className="flex gap-2 sm:gap-4 items-center">
                <Image 
                    src="/logo.png" 
                    width={100} 
                    height={100} 
                    alt="logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
                />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-white">
                    SHOPIFY
                </span>
            </div>
            </Link>

            {/* Search Bar */}
            <div className="w-full sm:w-[40%] md:w-[35%] lg:w-[25%] relative flex items-center">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full text-base sm:text-lg lg:text-xl bg-white px-3 sm:px-4 py-2 sm:py-3 lg:py-6 rounded-full h-8 sm:h-10"
                />
                {/* <Search className="absolute" color="black"/> */}
            </div>

            {/* USER, WISHLIST, ACCOUNT BUTTONS */}
            <div className="flex gap-2 sm:gap-3">
                <Image 
                    src={"/navbar/user1.png"} 
                    alt="user" 
                    width={100} 
                    height={100} 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full"
                />
                <Image 
                    src={"/navbar/user1.png"} 
                    alt="user" 
                    width={100} 
                    height={100} 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full"
                />
                <Image 
                    src={"/navbar/user1.png"} 
                    alt="user" 
                    width={100} 
                    height={100} 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full"
                />
            </div>
        </div>
    );
}

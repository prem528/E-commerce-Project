import Image from "next/image";
// import {Search} from "lucide-react";
export default function Navbar() {

    return(

        <div className="w-full h-full bg-[#5A4A3EFA] flex items-center py-4 justify-between px-10">

            {/* Logo and Name */}
            <div className="flex gap-4 items-center">
                <Image src="/logo.png" width={100} height={100} alt="logo" className="w-20 h-20 rounded-full"/>
                <span className="text-[36px] text-white">SHOPIFY</span>
            </div>

            {/* Search Bar */}
            <div className="w-[25%] relative flex items-center">
                <input type="text" placeholder="Search..." className="w-full text-xl bg-white px-4 py-6 rounded-full h-8 lg:-ml-14"/>
                {/* <Search className="absolute" color="black"/> */}
            </div>

            {/* USER, WISHLIST, ACCOUNT BUTTONS */}
            <div className="flex gap-3">
                <Image src={"/navbar/user1.png"} alt="user" width={100} height={100} className="w-16 h-16 rounded-full"/>
                <Image src={"/navbar/user1.png"} alt="user" width={100} height={100} className="w-16 h-16 rounded-full"/>
                <Image src={"/navbar/user1.png"} alt="user" width={100} height={100} className="w-16 h-16 rounded-full"/>
                
            </div>

        </div>


    )

}

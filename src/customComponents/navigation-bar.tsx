"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react"; // Import Menu icon for mobile
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "FURNITURE", href: "/furnitures" },
  { label: "KIDS", href: "/kids" },
  { label: "DISPENSARY", href: "/dispensary" },
];

export function NavigationBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto mt-4 sm:mt-6 lg:mt-8">
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-end px-4 py-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "sm:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <ul className="flex flex-col items-center border-y-2 border-black py-2">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-center transition-colors",
                  pathname === item.href
                    ? "bg-[#d7c4b5]"
                    : "hover:bg-[#f4e2d4]"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block border-black py-2 sm:py-3 border-t-2 border-b-2">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-2 sm:px-3 md:px-4 py-2 text-sm sm:text-base transition-colors whitespace-nowrap",
                    pathname === item.href
                      ? "bg-[#d7c4b5] rounded-xl sm:rounded-2xl"
                      : "hover:bg-[#f4e2d4] rounded-md"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

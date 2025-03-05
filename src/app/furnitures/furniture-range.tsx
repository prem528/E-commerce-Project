"use client";

import Image from "next/image";
import Link from "next/link";

interface FurnitureItem {
  title: string;
  price: string;
  image: string;
  href: string;
}

const furnitureItems: FurnitureItem[] = [
  {
    title: "4 CHAIR 1 TABLE SET",
    price: "7999/- INR",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/chair-table-set"
  },
  {
    title: "WOODEN FINISH BED SET",
    price: "13999/- INR",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/wooden-bed-set"
  },
  {
    title: "SOFA AND TABLE SET",
    price: "24999/- INR",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/sofa-table-set"
  },
  {
    title: "JODHPURI CUPBOARDS",
    price: "8999/- INR",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/jodhpuri-cupboards"
  },
  {
    title: "SOFA AND TABLE SET",
    price: "24999/- INR",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/sofa-table-set"
  },
  {
    title: "JODHPURI CUPBOARDS",
    price: "8999/- INR",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/jodhpuri-cupboards"
  },
  {
    title: "SOFA AND TABLE SET",
    price: "24999/- INR",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/sofa-table-set"
  },
  {
    title: "JODHPURI CUPBOARDS",
    price: "8999/- INR",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "/products/jodhpuri-cupboards"
  }
];

export function FurnitureRange() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold underline text-center mb-8 sm:mb-12 uppercase tracking-wider">
          Enjoy the Wide Range of Furniture
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {furnitureItems.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square mb-3 sm:mb-4 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 768px) 50vw,
                           (max-width: 1024px) 33vw,
                           25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 4} // Load first 4 images immediately
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-sm sm:text-base font-medium text-center truncate px-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-center text-amber-800 font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
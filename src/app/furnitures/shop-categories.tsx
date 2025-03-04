"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  title: string;
  description: string;
  content: string[];
  images: string[];
  href: string;
}

const categories: CategoryItem[] = [
  {
    title: "CHAIR AND TABLE SETS",
    description: "Handcrafted Rajasthani Wooden Table Chair Set - A Touch of Royalty",
    content:["Enhance your home with the timeless elegance of this Rajasthani beauty. Each piece represents a story told by skilled artisans, featuring intricate hand-carved designs that reflect the rich cultural heritage of India."],
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    ],
    href: "/categories/chair-and-table-sets"
  },
  {
    title: "STYLISH BED SETS",
    description: "Rajasthani Wooden Bed Set - Handcrafted Elegance for Your Home",
    content:["Enhance your home with the timeless elegance of this Rajasthani beauty. Each piece represents a story told by skilled artisans, featuring intricate hand-carved designs that reflect the rich cultural heritage of India."],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    href: "/categories/stylish-bed-sets"
  },
  {
    title: "ROYAL SOFA SETS",
    description: "Rajasthani Handcrafted Wooden Sofa Set - A Touch of Royalty for Your Home",
    content:["Enhance your home with the timeless elegance of this Rajasthani beauty. Each piece represents a story told by skilled artisans, featuring intricate hand-carved designs that reflect the rich cultural heritage of India."],
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    href: "/categories/royal-sofa-sets"
  },
  {
    title: "EXCLUSIVE CUPBOARDS",
    description: "Handcrafted Rajasthani Wooden Cupboard Set - Timeless Elegance & Traditional Charm",
    content:["Enhance your home with the timeless elegance of this Rajasthani beauty. Each piece represents a story told by skilled artisans, featuring intricate hand-carved designs that reflect the rich cultural heritage of India."],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ],
    href: "/categories/exclusive-cupboards"
  }
];

export function ShopCategories() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold underline text-center mb-8 sm:mb-12 uppercase tracking-wider">
          SHOP BY CATEGORIES
        </h2>
        <div className="space-y-12 sm:space-y-16">
          {categories.map((category, index) => (
            <div key={index} className={`group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:flex items-center gap-8 md:gap-12`}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full md:w-2/5 max-w-[500px]">
                {category.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative aspect-square overflow-hidden rounded-sm">
                    <Image
                      src={image}
                      alt={`${category.title} ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 250px"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full md:w-3/5 text-center">
               
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6  text-amber-800 transition-colors">
                    {category.title}
                  </h3>
                 
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">{category.description}</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {category.content}
                </p>
                <Link
                  href={category.href}
                  className="inline-block mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

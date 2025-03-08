"use client"
import React, { useState }  from 'react';
import { Heart, Truck, Shield, Package, Timer } from 'lucide-react';
import { ColorSelector } from './ColorSelector';
import { StarRating } from './StarRating';
import type { Product, Review } from '../../types';
import { ProductSection } from './ProductSection';

interface ProductSectionType {
  title: string;
  products: {
    id: string;
    name: string;
    price: number;
    mrp: number;
    discount: number;
    imageUrl: string;
  }[];
}

const product: Product = {
  id: '1',
  name: 'JODHPURI FINISH DINING SET',
  description: 'Built With The Authenticity And By The Finest Wood',
  price: 17999,
  mrp: 29999,
  discount: 40,
  colors: ['#8B4513', '#3E2723', '#D2691E'],
  features: [
    'Elegant Design: Traditional Jodhpuri Handwork With Intricate Carving, Adding A Royal Charm To Any Space',
    'Material: Premium Wood | Teakwood',
    'Set Includes: 1 Table + 4 Chairs (Customizable For Additional Seating)',
    'Material: Sheesham Wood / Teakwood',
    'Set Includes: 1 Table + 4 Chairs (customizable for additional seating)',
    'Color Options: Natural wood, dark brown, or custom finishes',
  ],
  rating: 4.2,
  totalReviews: 233,
  reviews: [
    {
      id: '1',
      userName: 'Debasis Dalai',
      rating: 5,
      date: '01/02/2024',
      comment: 'I purchased a Jodhpuri dining table set for my home, and it has completely transformed my dining area. The intricate carvings and natural wood finish give it a royal look that matches perfectly with my decor.',
    },
    {
      id: '2',
      userName: 'Utkarsh Tamani',
      rating: 5,
      date: '23/1/2024',
      comment: 'I love how my Jodhpuri chairs add a traditional vibe to my modern living space. They strike the perfect balance between heritage and comfort.',
    },
  ],
};

const similarProducts: ProductSectionType = {
    title: 'SIMILAR PRODUCTS',
    products: [
      {
        id: '1',
        name: 'JODHPURI SET',
        price: 12999,
        mrp: 19999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
      },
      {
        id: '2',
        name: 'EASY',
        price: 9659,
        mrp: 15999,
        discount: 40,
        imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80',
      },
      {
        id: '3',
        name: 'COOL LENS',
        price: 7999,
        mrp: 12999,
        discount: 38,
        imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80',
      },
      {
        id: '4',
        name: 'BUNDABEAN',
        price: 1599,
        mrp: 2999,
        discount: 47,
        imageUrl: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80',
      },
      {
        id: '5',
        name: 'AFTER SOFY',
        price: 1299,
        mrp: 2499,
        discount: 48,
        imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80',
      },
    ],
  };

  const customerAlsoLiked: ProductSectionType = {
    title: 'CUSTOMERS ALSO LIKED',
    products: [
      {
        id: '1',
        name: 'DESIGNER CHAIR SET',
        price: 15999,
        mrp: 24999,
        discount: 36,
        imageUrl: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80',
      },
      {
        id: '2',
        name: 'SOFA CUM BED',
        price: 29999,
        mrp: 45999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
      },
      {
        id: '3',
        name: 'WOODEN SOFA',
        price: 19999,
        mrp: 29999,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80',
      },
      {
        id: '4',
        name: 'CUPBOARD SET',
        price: 24999,
        mrp: 39999,
        discount: 38,
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
      },
      {
        id: '5',
        name: 'CUPBOARD SET',
        price: 24999,
        mrp: 39999,
        discount: 38,
        imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
      },
    ],
  };
  
  const moreFromStore: ProductSectionType = {
    title: 'MORE FROM THE STORE',
    products: [
      {
        id: '1',
        name: 'DESIGNER CUPBOARD SET',
        price: 12999,
        mrp: 19999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
      },
      {
        id: '2',
        name: 'DESIGNER CUPBOARD SET',
        price: 15999,
        mrp: 24999,
        discount: 36,
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
      },
      {
        id: '3',
        name: 'DESIGNER CUPBOARD SET',
        price: 12999,
        mrp: 19999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
      },
      {
        id: '4',
        name: 'DESIGNER CUPBOARD SET',
        price: 12999,
        mrp: 19999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
      },
      {
        id: '5',
        name: 'DESIGNER CUPBOARD SET',
        price: 12999,
        mrp: 19999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
      },
    ],
  };
  

function DetailsPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen  ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80"
              alt="Dining Set"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80"
                  alt={`Dining Set View ${i + 1}`}
                  className="w-full rounded-lg cursor-pointer hover:opacity-75 transition"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">₹{product.price}</span>
                <span className="text-gray-500 line-through">MRP ₹{product.mrp}</span>
                <span className="text-green-600 font-semibold">{product.discount}% off</span>
              </div>
              <p className="text-sm text-gray-600">
                Use code: Get Extra 5% off on Rs.20000 and above
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Select Color</h3>
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-[#96755b] text-white py-3 px-6 rounded-md hover:bg-green-600 transition">
                ADD TO CART
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-3 rounded-md border flex items-center gap-2 hover:border-red-600 ${
                  isWishlisted
                    ? 'border-red-500 text-red-500'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                <Heart className={isWishlisted ? 'fill-red-500' : ''} />
                <span className="text-sm font-medium">WISHLIST</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 py-6 border-y border-[#a2704a]">
              <div className="flex flex-col items-center text-center">
                <Truck className="text-[#a2704a]" />
                <span className="text-xs mt-2">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="text-[#a2704a]" />
                <span className="text-xs mt-2">Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="text-[#a2704a]" />
                <span className="text-xs mt-2">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Timer className="text-[#a2704a]" />
                <span className="text-xs mt-2">24/7 Support</span>
              </div>
            </div>

            <div className="space-y-4 ">
              <h3 className="text-2xl font-semibold ">Product Details</h3>
              <div className='py-4 border-y-2 border-[#a2704a] '>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              </div>
              
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between ">
                <h3 className="text-2xl font-semibold">Ratings and Reviews</h3>
                <div className="flex items-center gap-2 ">
                  <span className="text-2xl font-bold">{product.rating}</span>
                  <StarRating rating={product.rating} size={20} />
                  <span className="text-gray-500 ">
                    ({product.totalReviews} ratings)
                  </span>
                </div>
              </div>

              <div className="space-y-4 py-2 border-y-2 border-[#a2704a]">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{review.userName}</span>
                      <StarRating rating={review.rating} />
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>

              <button className="text-orange-500 font-semibold">
                See all Reviews →
              </button>
            </div>
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="mt-10 space-y-8">
          <ProductSection section={similarProducts} />
          <ProductSection section={customerAlsoLiked} cardSize="large" />
          <ProductSection section={moreFromStore} />
        </div>

      </div>
    </div>
  );
}

export default DetailsPage;
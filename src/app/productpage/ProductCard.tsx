import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import type { ProductCard as ProductCardType } from '../../types';

interface ProductCardProps {
  product: ProductCardType;
  size?: 'small' | 'large';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  size = 'small'
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group relative p-1 border rounded-lg hover:shadow-md transition-shadow bg-[#d7c4b5]">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md"
        >
          <Heart 
            size={16} 
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
          />
        </button>
      </div>
      <div className="mt-4 space-y-1 text-center">
        <h3 className={`text-gray-900 ${size === 'large' ? 'text-lg' : 'text-sm'} font-medium`}>
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold text-center">₹{product.price}</span>
          <span className="text-gray-500 text-sm line-through text-center">₹{product.mrp}</span>
          <span className="text-green-600 text-sm text-center">({product.discount}% off)</span>
        </div>
      </div>
    </div>
  );
};
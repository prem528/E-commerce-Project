import React from 'react';
import { ProductCard } from './ProductCard';
import type { ProductSection as ProductSectionType } from '../../types';

interface ProductSectionProps {
  section: ProductSectionType;
  cardSize?: 'small' | 'large';
}

export const ProductSection: React.FC<ProductSectionProps> = ({ 
  section,
  cardSize = 'small'
}) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-center mb-8 py-2 bg-[#d7c4b5]">{section.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {section.products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            size={cardSize}
          />
        ))}
      </div>
    </div>
  );
};
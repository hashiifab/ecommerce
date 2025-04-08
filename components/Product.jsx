import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, categories } }) => {
  return (
    <div className="product-card">
      <Link href={`/product/${slug.current}`}>
        <div className="product-image-wrapper">
          <img 
            src={urlFor(image && image[0])}
            alt={name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>

      {categories?.length > 0 && (
        <div className="product-categories">
          {categories.map((category) => (
            <span key={category._id} className="category-badge">
              {category.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;

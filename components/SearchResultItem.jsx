import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

export const SearchResultItem = ({ product }) => (
  <Link href={`/product/${product.slug.current}`}>
    <div className="search-result-item">
      <img 
        src={urlFor(product.image[0]).url()} 
        alt={product.name}
        className="search-result-image"
      />
      <div className="search-result-details">
        <h3 className="search-result-title">{product.name}</h3>
        <p className="search-result-price">${product.price}</p>
        <p className="search-result-description">{product.details.substring(0, 60)}...</p>
      </div>
    </div>
  </Link>
);
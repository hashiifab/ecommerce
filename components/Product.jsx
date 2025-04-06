import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, categories } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
      {categories && (
        <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <span 
              key={category._id}
              style={{ 
                backgroundColor: '#f0f0f0',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}
            >
              {category.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Product
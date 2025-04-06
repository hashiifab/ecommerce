import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import Link from 'next/link';

const Home = ({ products, bannerData, categories }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    
    <div className="categories-section">
      <h2>Product Categories</h2>
      <div className="categories-container">
        {categories?.map((category) => (
          <Link href={`/category/${category.slug.current}`} key={category._id}>
            <button className="category-button">
              {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '*[_type == "category"]';
  const categories = await client.fetch(categoryQuery);

  return {
    props: { products, bannerData, categories }
  }
}

export default Home;

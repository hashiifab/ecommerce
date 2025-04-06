import React from 'react';
import { client } from '../../lib/client';
import { Product } from '../../components';

const CategoryPage = ({ products, categoryName }) => {
  return (
    <div>
      <h2 className="products-heading">Kategori: {categoryName}</h2>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]`;
  const category = await client.fetch(categoryQuery, { slug: params.slug });
  console.log('Category ID:', category._id);

  if(!category?._id) {
    return { props: { products: [], categoryName: 'Category not found' } };
  }

  const productsQuery = `*[_type == "product" && _id in *[_type == "category" && _id == $categoryId].products[]._ref]`;
  console.log('Category ID for query:', category._id);
  console.log('Query:', productsQuery);
  const products = await client.fetch(productsQuery, { categoryId: category._id }).catch(error => {
    console.log('Query parameters:', { categoryId: category._id });
    console.error('Error fetching products:', error);
    return [];
  });
  console.log('Products found:', products.length);
  console.log('Sample products:', products.slice(0,2));

  return {
    props: {
      products,
      categoryName: category.name
    }
  }
};

export default CategoryPage;
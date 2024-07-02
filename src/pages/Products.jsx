import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/products_page.json')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the product data:', error);
        setError('Error fetching product data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const popularProducts = products.slice(0, 10);
  const remainingProducts = products.slice(10);

  return (
    <div className="container mx-auto p-4  bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ">
        {popularProducts.map(product => (
          <div key={product.id} className=" bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md transform transition duration-500 hover:scale-95 ">
            <div className="w-full h-48 bg-gray-200 rounded ">
              <img
                className="w-full h-full object-cover rounded"
                src={product.product_thumbnail}
                alt={product.product_name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }}
              />
            </div>
            <h2 className="text-lg font-semibold mt-2 pl-4">{product.product_name}</h2>
            <p className="text-gray-600 pl-4">{product.product_price}</p>
            <p
              className={classNames(
                product.product_stock === 0 ? 'text-red-500' :
                product.product_stock > 50 ? 'text-green-500' : 'text-orange-500',
                'text-sm pl-4 pb-4'
              )}
            >
              {product.product_stock === 0 ? 'Out of Stock' : `${product.product_stock} in Stock`}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {remainingProducts.map(product => (
          <div key={product.id} className=" bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300
">
            <div className="w-full h-48 bg-gray-200 rounded">
              <img
                className="w-full h-full object-cover rounded"
                src={product.product_thumbnail}
                alt={product.product_name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }}
              />
            </div>
            <h2 className="text-lg font-semibold mt-2 pl-4">{product.product_name}</h2>
            <p className="text-gray-600 pl-4">{product.product_price}</p>
            <p
              className={classNames(
                product.product_stock === 0 ? 'text-red-500' :
                product.product_stock > 50 ? 'text-green-500' : 'text-orange-500',
                'text-sm pl-4 pb-4'
              )}
            >
              {product.product_stock === 0 ? 'Out of Stock' : `${product.product_stock} in Stock`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

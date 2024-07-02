import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';


import product_logo from './assets/product_Logo.png'

function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/products.json')
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

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-100 dark:border-gray-200 w-[20rem] ">
      <strong className="text-black font-medium mr-14 pl-1.5">Popular Products</strong>
      <a href="/products">View all</a>
      <div className="mt-4 flex flex-col gap-3 w-max">
        {products.map((product) => (
          <div key={product.id} className="flex items-start  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product_logo}
                alt={product.product_name}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/40'; }}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  product.product_stock === 0
                    ? 'text-red-500'
                    : product.product_stock > 50
                    ? 'text-green-500'
                    : 'text-orange-500',
                  'text-xs font-medium'
                )}
              >
                {product.product_stock === 0 ? 'Out of Stock' : `${product.product_stock} in Stock`}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;

// src/components/CustomersPage.jsx
import React, { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';

function CustomersPage() {
  const { customers } = useContext(CustomerContext);

  if (!customers.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map(customer => (
          <div key={customer.id} className="p-4 bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-sm font-medium text-gray-900 truncate dark:text-black">{customer.name}</h2>
            
            <li className="text-sm text-gray-600 truncate"><a href="" className='dark:text-gray-200'>{customer.email}</a></li>
            <li className="text-sm text-gray-500 truncate dark:text-gray-200">{customer.address}</li>
              
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersPage;

// src/pages/TransactionPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hrry =  <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>

  useEffect(() => {
    axios.get('/transactionsPage.json')
      .then(response => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the transactions data:', error);
        setError('Error fetching transactions data');
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactions.map(transaction => (
          <div key={transaction.transaction_id} className="p-4 bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-black">Transaction ID: <a href="" className='text-blue-700'>{transaction.transaction_id}</a></h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-200 ">
             <li class="flex items-center">{hrry}Customer ID: {transaction.customer_id}</li>
             <li class="flex items-center">{hrry}Product ID: {transaction.product_id}</li>
             <li class="flex items-center">{hrry}Quantity: {transaction.quantity}</li>
             <li class="flex items-center">{hrry}Total Price: {transaction.total_price}</li>
             <li class="flex items-center">{hrry}Date: {transaction.transaction_date}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionPage;

// src/components/RecentOrders.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getOrderStatus } from '../lib/helpers';



const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders.json')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md min-w-full  border border-gray-300">
        <thead className='bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg'>
          <tr className=" border-b">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Product ID</th>
            <th className="px-4 py-2 text-left">Customer Name</th>
            <th className="px-4 py-2 text-left">Order Date</th>
            <th className="px-4 py-2 text-left">Order Total</th>
            <th className="px-4 py-2 text-left">Shipping Address</th>
            <th className="px-4 py-2 text-left">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.productId}</td>
              <td className="px-4 py-2">{order.customerName}</td>
              <td className="px-4 py-2">{order.orderDate}</td>
              <td className="px-4 py-2">{order.orderTotal}</td>
              <td className="px-4 py-2">{order.shippingAddress}</td>
              <td className="px-4 py-2">{getOrderStatus(order.orderStatus)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;

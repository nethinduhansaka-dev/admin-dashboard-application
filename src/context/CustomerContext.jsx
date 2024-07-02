// src/context/CustomerContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('/customers_page.json')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the customers data:', error);
      });
  }, []);

  const addCustomer = (customer) => {
    setCustomers(prevCustomers => [...prevCustomers, customer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;

import React, { useState, useContext } from 'react';
import CustomerContext from '../context/CustomerContext';

const OrderPage = () => {
  const { addCustomer } = useContext(CustomerContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address && product && quantity > 0 && cardNumber && expiryDate && cvv) {
      const newCustomer = { id: Date.now(), name, email, address, product, quantity, cardNumber, expiryDate, cvv };
      addCustomer(newCustomer);
      setName('');
      setEmail('');
      setAddress('');
      setProduct('');
      setQuantity(1);
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } else {
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Order Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
          />
        </div>
        <div>
          <label>Product</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
            min="1"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
          <div>
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
            />
          </div>
          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="border p-2 mb-2 w-full bg-gray-200 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className='pt-2'>
          <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            
              Order
            
          </button>
        </div>
      </form>
      {showSuccessPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Order successful
        </div>
      )}
      {showErrorPopup && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          Please fill out all fields
        </div>
      )}
    </div>
  );
};

export default OrderPage;

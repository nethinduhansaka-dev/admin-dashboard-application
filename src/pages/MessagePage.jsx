import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(10);
  const  SEARCH_Icon = <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>;

  useEffect(() => {
    axios.get('/messages.json')
      .then(response => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the messages data:', error);
        setError('Error fetching messages data');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMessages = messages.filter(
    message => 
      message.sender.toLowerCase().includes(search.toLowerCase()) ||
      message.subject.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <div>Loading...</div>
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

     
     
     <input
        type="text"
        placeholder="Search by "
        value={search}
        onChange={handleSearchChange}
        className="mb-4 w-2/6 p-2 border border-gray-300 bg-white rounded-3xl"
       
      />
      
      
       
      <div className="grid grid-rows-9 gap-4">
        {currentMessages.map(message => (
          <div key={message.id} className="bg-gray-100 bg-opacity-60 backdrop-filter backdrop-blur-lg p-2 border border-gray-100 flex">
            <h2 className="w-1/5 font-semibold mt-2">{message.sender}</h2>
            <p className="w-3/5 text-gray-600 mt-2">{message.subject}</p>
            <p className="w-1/5 text-gray-600 mt-2">Date: {message.date}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-2">
        <ul className="inline-flex -space-x-px gap">
          {[...Array(Math.ceil(filteredMessages.length / messagesPerPage)).keys()].map(number => (
            <li key={number + 1} onClick={() => paginate(number + 1)} className="bg-white block w-8 h-8 text-center border leading-8">
              {number + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessagePage;

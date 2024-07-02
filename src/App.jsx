import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/shared/Layout";
import Products from "./pages/Products";
import Register from "./pages/Register";
import OrderPage from "./pages/OrderPage";
import CustomersPage from "./pages/Customers";
import { CustomerProvider } from "./context/CustomerContext";
import TransactionPage from "./pages/TransactionPage";
import MessagePage from "./pages/MessagePage";
import SettingsPage from "./pages/SettingsPage";
import HelpSupportPage from "./pages/HelpSupportPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <CustomerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="transactions" element={<TransactionPage />} />
            <Route path="messages" element={<MessagePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="support" element={<HelpSupportPage />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </CustomerProvider>
  );
}

export default App;

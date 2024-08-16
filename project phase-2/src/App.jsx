// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Consultant from './components/Consultant';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Login from './components/Login';
import Signup from './components/Signup';
import Demonstration from './components/Demonstrations';
import Products from './components/Products';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Login' element={<Login />} />
            <Route path='Signup' element={<Signup />} />

            <Route path='About' element={
              <PrivateRoute element={<About />} />
            } />
            <Route path='Consultant' element={
              <PrivateRoute element={<Consultant />} />
            } />
            <Route path='Contact' element={
              <PrivateRoute element={<Contact />} />
            } />
            <Route path='FAQs' element={
              <PrivateRoute element={<FAQs />} />
            } />
            <Route path='Demonstration' element={
              <PrivateRoute element={<Demonstration />} />
            } />
            <Route path='Products' element={
              <PrivateRoute element={<Products />} />
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

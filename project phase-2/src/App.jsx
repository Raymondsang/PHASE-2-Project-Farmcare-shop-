import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute.jsx'; // Ensure this file is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Login' element={<Login />} />
          <Route path='Signup' element={<Signup />} />

          <Route path='About' element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          } />
          <Route path='Consultant' element={
            <PrivateRoute>
              <Consultant />
            </PrivateRoute>
          } />
          <Route path='Contact' element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          } />
          <Route path='FAQs' element={
            <PrivateRoute>
              <FAQs />
            </PrivateRoute>
          } />
          <Route path='Demonstration' element={
            <PrivateRoute>
              <Demonstration />
            </PrivateRoute>
          } />
          <Route path='Products' element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

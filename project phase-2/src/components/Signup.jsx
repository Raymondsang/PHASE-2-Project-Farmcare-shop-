// src/components/Signup.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add signup logic here
    navigate('/Login');
  };

  return (
    <div>
      <h1>Signup</h1>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

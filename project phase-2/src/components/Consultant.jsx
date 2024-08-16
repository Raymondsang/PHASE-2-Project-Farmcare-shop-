import React from 'react'



const Consultant = () => {
  return (
    <div className="consultant-container">
      <h1>Talk to a Consultant Today</h1>
      <form className="consultant-form">
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email address" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Select Product:</label>
          <select id="product" required>
            <option value="" disabled>Select a product</option>
            <option value="Greenhouse equipment">Product 1</option>
            <option value="Irrigation equipment">Product 2</option>
            <option value="Fertilizers and agrochemicals">Product 3</option>
            <option value="Talk to a specialist">Product 4</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Consultant
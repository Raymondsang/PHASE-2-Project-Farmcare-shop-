import React from 'react'

const Demonstration = () => {
  return (
    <div className="demonstration-container">
      <h1>Book a Visit to Our Demonstration Farm</h1>
      <p>
        <button type="button" className="book-button">Book</button>
      </p>
      <form className="demonstration-form">
        <div className="formgroup2">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className="formgroup2">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" />
        </div>
        <div className="formgroup2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="formgroup2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


export default Demonstration
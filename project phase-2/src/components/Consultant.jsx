import React from 'react';

const Consultant = () => {
  return (
    <div>
        <h1>Talk to a Consultant Today</h1>
        <div>
            <form>
               
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Enter your emailaddress" /><br />
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Enter your password" /><br />
                <button type="submit">Submit</button>
            </form>
           
        </div>
        
      
    </div>
    
  );
};

export default Consultant;

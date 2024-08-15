import React from 'react'

const Demonstration = () => {
  return (
    <div>
        <h1>Book a visit to our demonstration farm </h1>
        <p><button>Book</button></p>
        <form action="">
            <div>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname"/>
            </div>
            <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Demonstration
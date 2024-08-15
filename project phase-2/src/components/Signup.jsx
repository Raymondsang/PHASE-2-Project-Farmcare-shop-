import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const Signup = () => {
  return (
    <div>
      <h1>Sign-up</h1>
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
        </div> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup

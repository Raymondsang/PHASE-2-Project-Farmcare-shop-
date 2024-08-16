import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase.jsx';



const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <p>
            <div>
               <form action="">
                   <div>
                       <label htmlFor="email">Email:</label>
                       <input type="email" id="email" name="email"/>
                   </div>
                   <div>
                       <label htmlFor="password">Password:</label>
                       <input type="password" id="password" name="password"/><br /> <br />
                       <button type="submit">Submit</button>
                   </div>
               </form>
            </div>
        </p>
    </div>
  )
}

export default Login;
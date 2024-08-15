import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Consultant from './components/Consultant'
import Contact from './components/Contact'
import FAQs from './components/FAQs'
import Login from './components/Login'
import Signup from './components/Signup'
import Demonstration from './components/Demonstrations'
import Products from './components/Products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="title">WELCOME TO SANG FARMCARE ONLINE SHOP</h1>
         <div>
          <div>
          <nav className="nav">
            <button type="button">PRODUCTS</button>
            <button type="button">FAQs</button>
            <button type="button">ABOUT</button>
            <button>TALK TO A CONSULTANT</button>
            <button>CONTACT</button>
          </nav>
         </div>
              <h1>Login</h1>
              <p>
                  <div>
                    <form action="">
                        <div>
                            <label htmlFor="email">Email:</label> <br /><br />
                            <input type="email" id="email" name="email"/>
                        </div> <br />
                        <div>
                            <label htmlFor="password">Password:</label><br /><br />
                            <input type="password" id="password" name="password"/><br /> <br />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                  </div>
              </p>
         </div>
         <div className="tractor">
             <div><img src="public/images/pexels-andre-124356440-16101071.jpg" alt="A green tractor" height="600px" width="500px"/></div><br />
             <p>
              HIRE A PROFFESSIONAL TODAY FOR EXPERT ADVICE AND CONTRACT WORK.
             </p> <br />
             <button>LEARN MORE.</button>
         </div> <br /><br />
         <div className="expert">
          <button>
            BOOK A VISIT DATE TO OUR DEMONSTRATION FARM
          </button>
         </div><br /><br />
         <div className="products">
            <h2>OUR PRODUCTS</h2>
            <div className="samples">
              <div>
                <img src="public/images/pexels-tamara-elnova-218645958-12020221.jpg" alt="A blue watering can" height="600px" width="500px" />
                <p>Watering cans.</p> <br />
                <p>AVAILABLE FROM 5 LITRES- 15 LITRES.</p> <br />
                <button>Learn More.</button>
              </div>
            <div>
              <div>
                <img src="public/images/pexels-greta-hoffman-7728012.jpg" alt="Seedling trays" height="600px" width="500px" />
                <p>GET PVC SEEDLING TRAYS AT DISCOUNTED PRICES</p> <br />
                <p>SIZES FROM 150-850 SEEDLING CAPACITY TRAYS</p> <br />
                <button>LEARN MORE.</button>
              </div>  
             </div>
            <div>
              <div>
                <img src="public/images/pexels-shvetsa-5231223.jpg" alt="Plants in a greenhouse." height="600px" width="500px" />
                <p>GET ACCESS TO HIGHYIELD SEEDLING VARIETIES OF VARIOUS PLANTS.</p> <br />
                <p>SEEDLINGS AVAILABLE 45 DAYS AFTER ORDER DATE</p> <br />
                <button>LEARN MORE.</button>
              </div>
            </div>
            <div>
              <div>
                <article>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, consequuntur doloribus? Minus, deserunt impedit nesciunt iste obcaecati eligendi esse odio recusandae consectetur ipsam ea voluptatum dicta dolorum assumenda ipsum placeat.
                </article>
                <article>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cupiditate delectus iure iste natus impedit! Sit voluptates mollitia facere ipsa commodi quaerat, natus magnam eius minus dolores quam quis nobis?
                </article>
              </div>
          </div>
          <div>
              <h2>CATEGORIES.</h2>
              <ul>
                <li>Greenhouse PVC sheets.</li> <br />
                <li>Fertilisers(DAP,CAN,NPK)</li> <br />
                <li>Greenhouse poles(Metalic and Timber)</li> <br />
                <li>Irrigation Equipment</li> <br />
                <li>Seedlings and Seedling trays</li><br />
                <li>Farm Equipment and Machinery</li><br />
              </ul>
          </div>
              
        </div>
          <div>
            <div>
              <footer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio at eum inventore rem! Dignissimos unde labore ex dicta eos consequatur sapiente quia accusantium ab eum. Officiis possimus vero commodi?
              </footer>
            </div>
            <div>
              <h2>Contacts</h2>
              <p>
                <a href="raysang98@gmail.com"></a>
                <a href="tel:+254737577012"></a>
                <address>
                  20200-2034 <br />
                  Nairobi,
                  Kenya.
                </address>
              </p>
            </div>
          </div>


        </div>


         
        {/* <About />
        <Consultant />
        <Contact />
        <FAQs />
        <Login />
        <Signup />
        <Demonstration />
        <Products /> */}

      </div>
       
    </>
  )
}

export default App

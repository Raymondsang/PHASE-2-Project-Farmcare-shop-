// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header classNmae="crypto">
        <h1 className="header-title">WELCOME TO SANG FARMCARE ONLINE SHOP</h1>
        <nav className="nav">
          <Link to="/Products"><button type="button">PRODUCTS</button></Link>
          <Link to="/FAQs"><button type="button">FAQs</button></Link>
          <Link to="/About"><button type="button">ABOUT</button></Link>
          <Link to="/Consultant"><button type="button">TALK TO A CONSULTANT</button></Link>
          <Link to="/Contact"><button type="button">CONTACT</button></Link>
        </nav>
      </header>

      <div className="main-content">
        <div className="login-container">
          <section className="login-section">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>

          <section className="tractor">
            <img src="public/images/pexels-andre-124356440-16101071.jpg" alt="A green tractor" className="tractor-image" />
            <p>HIRE A PROFESSIONAL TODAY FOR EXPERT ADVICE AND CONTRACT WORK.</p>
            <button>LEARN MORE</button>
          </section>
        </div>

        <section className="products">
          <h2>OUR PRODUCTS</h2>
          <div className="samples">
            <div className="product-item">
              <img src="public/images/pexels-tamara-elnova-218645958-12020221.jpg" alt="A blue watering can" className="product-image" />
              <p>Watering cans.</p>
              <p>AVAILABLE FROM 5 LITRES- 15 LITRES.</p>
              <button>LEARN MORE</button>
            </div>
            <div className="product-item">
              <img src="public/images/pexels-greta-hoffman-7728012.jpg" alt="Seedling trays" className="product-image" />
              <p>GET PVC SEEDLING TRAYS AT DISCOUNTED PRICES</p>
              <p>SIZES FROM 150-850 SEEDLING CAPACITY TRAYS</p>
              <button>LEARN MORE</button>
            </div>
            <div className="product-item">
              <img src="public/images/pexels-shvetsa-5231223.jpg" alt="Plants in a greenhouse" className="product-image" />
              <p>GET ACCESS TO HIGH YIELD SEEDLING VARIETIES OF VARIOUS PLANTS.</p>
              <p>SEEDLINGS AVAILABLE 45 DAYS AFTER ORDER DATE</p>
              <button>LEARN MORE</button>
            </div>
            <div className="product-details">
              <article>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, consequuntur doloribus? Minus, deserunt impedit nesciunt iste obcaecati eligendi esse odio recusandae consectetur ipsam ea voluptatum dicta dolorum assumenda ipsum placeat.
              </article>
              <article>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cupiditate delectus iure iste natus impedit! Sit voluptates mollitia facere ipsa commodi quaerat, natus magnam eius minus dolores quam quis nobis?
              </article>
            </div>
            <div className="categories">
              <h2>CATEGORIES</h2>
              <ul>
                <li>Greenhouse PVC sheets.</li>
                <li>Fertilisers (DAP, CAN, NPK)</li>
                <li>Greenhouse poles (Metallic and Timber)</li>
                <li>Irrigation Equipment</li>
                <li>Seedlings and Seedling trays</li>
                <li>Farm Equipment and Machinery</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio at eum inventore rem! Dignissimos unde labore ex dicta eos consequatur sapiente quia accusantium ab eum. Officiis possimus vero commodi?
            </p>
          </div>
          <div className="contact-info">
            <h2>Contacts</h2>
            <p>
              <a href="mailto:raysang98@gmail.com">Email</a><br />
              <a href="tel:+254737577012">Call us</a><br />
              <address>
                20200-2034<br />
                Nairobi,<br />
                Kenya
              </address>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

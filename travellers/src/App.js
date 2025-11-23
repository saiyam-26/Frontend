import React from "react";
import "./Paris.css";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="travel.html" className="logo">Travellers</a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#food">Food</a></li>
          <li><a href="#review">Reviews</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <img src="/ParisHeading.jpg" alt="Paris" />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <h2>About Paris</h2>

        <div className="about-wrapper">
          <img src="/AboutParis.jpg" alt="Paris" />

          <div className="about-text">
            <p>
              Paris, often known as the “City of Light,” is one of the most iconic travel
              destinations in the world. It is famous for its timeless architecture,
              romantic atmosphere, world-class cuisine, artistic heritage, and elegant
              streetscapes. From the historic Eiffel Tower to the peaceful Seine River,
              every corner of Paris carries a story, a charm, and a sense of beauty that
              captivates millions of visitors each year. Paris is not just a city—it is
              an emotion, a cultural paradise, and a place where the past and present
              blend beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="gallery-section">
        <h2>Gallery</h2>

        <div className="gallery-container">

          <div className="gallery-item">
            <img src="/et2.jpg" alt="" />
            <p className="img-name">Eiffel Tower</p>
          </div>

          <div className="gallery-item">
            <img src="https://i.pinimg.com/1200x/d4/5c/78/d45c78e7c799bf54edb63ff6925f943b.jpg" alt="" />
            <p className="img-name">Paris Streets</p>
          </div>

          <div className="gallery-item">
            <img src="../Assets/lm.jpg" alt="" />
            <p className="img-name">Louvre Museum</p>
          </div>

          <div className="gallery-item">
            <img src="/sr.jpg" alt="" />
            <p className="img-name">Seine River</p>
          </div>

          <div className="gallery-item">
            <img src="/adt.jpg" alt="" />
            <p className="img-name">Arc de Triomphe</p>
          </div>

          <div className="gallery-item">
            <img src="/nd.jpg" alt="" />
            <p className="img-name">Notre Dame</p>
          </div>

          <div className="gallery-item">
            <img src="/pc.jpg" alt="" />
            <p className="img-name">Paris Café</p>
          </div>

          <div className="gallery-item">
            <img src="/mop.jpg" alt="" />
            <p className="img-name">Museums of Paris</p>
          </div>

          <div className="gallery-item">
            <img src="/cl.jpg" alt="" />
            <p className="img-name">City Lights</p>
          </div>

        </div>
      </section>

      {/* FOOD SECTION */}
      <section id="food" className="food-section">
        <h2>Famous Food of Paris</h2>

        {/* ROW 1 */}
        <div className="food-row">
          <div className="food-image-box">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="" />
            <p className="food-name">Croissant</p>
          </div>

          <div className="food-text">
            The French croissant is one of Paris’s most iconic breakfast pastries. Made with buttery,
            flaky layers and baked to golden perfection...
          </div>
        </div>

        {/* ROW 2 */}
        <div className="food-row">
          <div className="food-image-box">
            <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9" alt="" />
            <p className="food-name">Crème Brûlée</p>
          </div>

          <div className="food-text">
            Crème Brûlée is a classic French dessert adored for its smooth vanilla custard base topped
            with caramelized sugar...
          </div>
        </div>

        {/* ROW 3 */}
        <div className="food-row">
          <div className="food-image-box">
            <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" alt="" />
            <p className="food-name">French Baguette</p>
          </div>

          <div className="food-text">
            The French baguette is a staple of Parisian life. Famous for its crispy crust and soft airy
            interior...
          </div>
        </div>

      </section>

      {/* TESTIMONIAL SECTION */}
      <section id="review" className="testimonial-section">
        <h2>What Visitors Say</h2>

        <div className="testimonial-container">

          <div className="testimonial-card">
            <div className="t-img"></div>
            <h3 className="t-name">Sophia Williams</h3>
            <p className="t-role">Traveler from USA</p>
            <p className="t-text">
              “Paris is absolutely magical! Everything feels like a dream. Amazing experience!”
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-img img2"></div>
            <h3 className="t-name">Arjun Mehra</h3>
            <p className="t-role">Traveler from India</p>
            <p className="t-text">
              “The museums, the cafés, the night views… Paris made my trip unforgettable.”
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-img img3"></div>
            <h3 className="t-name">Maria Garcia</h3>
            <p className="t-role">Traveler from Spain</p>
            <p className="t-text">
              “The culture, the people, and the food made my visit perfect.”
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h3>Travellers</h3>
            <p>Your trusted partner for unforgettable journeys worldwide.</p>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#food">Food</a>
            <a href="#hotel">Hotel</a>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: support@travellers.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chandigarh, India</p>
          </div>

          <div className="footer-box">
            <h3>Follow Us</h3>
            <div className="footer-icons">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Travellers. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;


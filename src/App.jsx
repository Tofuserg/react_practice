import './App.css'

function App() {
  const featuresData = [
  { id: 1, title: "Naxly as the Winners in Global Agency Awards" },
  { id: 2, title: "Expert Prespective Agency Awards" },
  { id: 3, title: "Business Prespective Global Agency Awards" },
  { id: 4, title: "Value for Results in Global Agency Awards" },
  { id: 5, title: "Global Experience in Agency Awards" }
];

  return (
    <div className="app-container">
      <div  id='desc'>
      <div>
        <h1>
          Artificial Intelligence Business Landing Page
        </h1>
      </div>
      <div>
        <p>
          Сторінка для платформи, що спеціалізується на штучному інтелекті та кібербезпеці
        </p>
      </div>
      </div>

      <header>
        <div id="logo">
          <img src="imgs/robot.png" alt="Robot Logo" />
          <h2>Artificial intelligence</h2>
        </div>
        <nav id="buttons">
          <button type="button">Home</button>
          <button type="button">About</button>
          <button type="button">Services</button>
          <button type="button">Blog</button>
          <button type="button">Contact</button>
        </nav>
        <div id="sign">
          <button type="button">Sign in</button>
        </div>
      </header>

      <main>
        <section id="hero-area">
          <div id="ng-platform">
            <h3>NEXT GENERATION PLATFORM</h3>
            <h2>Artificial intelligence &amp; Syber security</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div id="hero-area-btns">
              <button type="button">Get Started</button>
              <button type="button">
                <img src="imgs/play.png" alt="Play icon" />
                Watch Video
              </button>
            </div>
          </div>
          <img id="rocket-logo" src="imgs/rocket.png" alt="Rocket Illustration" />
        </section>

        <div id="logos-ipsum">
          <img src="imgs/ipsum/techcoipsum.png" alt="Techco Ipsum" />
          <img src="imgs/ipsum/coloripsum.png" alt="Color Ipsum" />
          <img src="imgs/ipsum/circleipsum.png" alt="Circle Ipsum" />
          <img src="imgs/ipsum/shapeipsum.png" alt="Shape Ipsum" />
        </div>

        <section id="apply-ai">
          <div>
            <img src="imgs/ai.png" alt="AI Interface" />
          </div>
          <div id="apply-ai-text">
            <h2>Apply AI, Deep Learning and Data Science to solve</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <button type="button">Learn More</button>
          </div>
        </section>

        <section id="feature">
          {featuresData.map((item) => (
            <div key={item.id}>
              <img src={`imgs/cards/welcome${item.id}.png`} alt={`Award Feature ${item.id}`} />
              <h3>{item.title}</h3>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
          ))}
        </section>

        <div id="dots">
          <span className="dot"></span>
          <span className="dot-active"></span>
          <span className="dot"></span>
        </div>

        <section id="about">
          <div id="about-text">
            <h2>What our clients say about our awesome solutions</h2>
            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
            <p>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <img src="imgs/about/about1.png" alt="Client Testimonial" />
        </section>
      </main>

      <footer>
        <div>
          <div id="footer-logo">
            <img src="imgs/robot.png" alt="Footer Logo" />
            <h3>Artificial Intelligence</h3>
          </div>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
          <div className="info">
            <p><img src="imgs/info/mail.png" alt="Email" /> Company@gmail.com</p>
            <p><img src="imgs/info/phone.png" alt="Phone" /> Phone: (064) 332-1233</p>
            <p><img src="imgs/info/gps.png" alt="Location" /> 450 Wall Street, USA, New York</p>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>INFORMATION</h4>
          <p>New Collection</p>
          <p>About Store</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Orders History</p>
        </div>

        <div className="footer-links">
          <h4>FOOTER MENU</h4>
          <p>Instagram profile</p>
          <p>New Collection</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Terms &amp; Conditions</p>
          <p>Purchase Theme</p>
        </div>

        <div className="footer-links">
          <h4>USEFUL LINKS</h4>
          <p>Instagram profile</p>
          <p>New Collection</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Terms &amp; Conditions</p>
          <p>Purchase Theme</p>
        </div>

        <div className="footer-links">
          <h4>ABOUT THE STORE</h4>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
          <p>www.company.com</p>
          <div id="social-imgs">
            <img src="imgs/social/facebook.png" alt="Facebook" />
            <img src="imgs/social/instagram.png" alt="Instagram" />
            <img src="imgs/social/twitter.png" alt="Twitter" />
            <img src="imgs/social/linkedin.png" alt="LinkedIn" />
            <img src="imgs/social/youtube.png" alt="YouTube" />
          </div>
          <div className="lang-dropdown">
            <img src="imgs/world.png" alt="Language Selection" />
            <button className="lang-btn" type="button">English ▾</button>
            <ul className="lang-list">
              <li><a href="#">Ukrainian</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="author-section">
        <div className="author-content">
          <p>Serhii Sambros</p>
          <div className="author-links">
            <a href="https://github.com/Tofuserg" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.figma.com/design/tWjxiEJLfYrVZMV5FtoJlg/Artificial-Intelligence--?node-id=0-1&p=f&t=RB8Gnq1StfmPUFji-0" target="_blank" rel="noopener noreferrer">Дизайн</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
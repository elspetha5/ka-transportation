import "./home-page.scss";

function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-tagline">The Future of Getting There</div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-profile-pic" />
        <div className="contact-info-container">
          <div>Dhulfiqar Kamoona</div>
          <a href="tel:+14802576590" className="button">
            480-257-6590
          </a>
          <div className="contact-payment">
            Cash |{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Venmo
            </a>{" "}
            |{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Zelle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

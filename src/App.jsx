import { useState } from "react";
import "./index.css";

const business = {
  name: "Prime Business",
  tagline: "Quality service you can trust.",
  description:
    "We provide professional and reliable services designed to meet your needs.",
  phone: "09038154101",
  whatsapp: "2349038154101",
  email: "hello@primebusiness.com",
  location: "AkwaIbom, Nigeria",

  services: [
    {
      title: "Professional Service",
      description:
        "Reliable and high-quality services delivered with attention to detail.",
    },
    {
      title: "Custom Solutions",
      description:
        "Flexible solutions designed specifically around your needs.",
    },
    {
      title: "Customer Support",
      description:
        "Friendly and responsive support whenever you need us.",
    },
  ],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hello ${business.name}, I would like to make an enquiry.`
  );

  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${whatsappMessage}`;

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          {business.name}
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-heading">WELCOME TO {business.name}</p>

          <h1>{business.tagline}</h1>

          <p className="hero-description">
            {business.description}
          </p>

          <div className="hero-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Chat on WhatsApp
            </a>

            <a href="#services" className="secondary-button">
              Our Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <span>YOUR BUSINESS IMAGE</span>
            <p>Replace this with your client's photo</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-title">
          <p className="small-heading">ABOUT US</p>

          <h2>We are committed to quality.</h2>
        </div>

        <div className="about-content">
          <p>
            At {business.name}, we believe that good service starts
            with understanding our customers. We focus on providing
            reliable, affordable and professional solutions.
          </p>

          <p>
            Our goal is simple: make every customer satisfied with
            the service they receive.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-title center">
          <p className="small-heading">WHAT WE DO</p>

          <h2>Our Services</h2>

          <p>
            Professional solutions designed around your needs.
          </p>
        </div>

        <div className="services-grid">
          {business.services.map((service, index) => (
            <div className="service-card" key={service.title}>
              <span className="service-number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div>
          <p className="small-heading">WHY CHOOSE US</p>

          <h2>
            Professional service with your satisfaction in mind.
          </h2>
        </div>

        <div className="why-list">
          <p>✓ Professional and reliable</p>
          <p>✓ Affordable pricing</p>
          <p>✓ Customer-focused service</p>
          <p>✓ Fast communication</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-title">
          <p className="small-heading">GET IN TOUCH</p>

          <h2>Let's work together.</h2>

          <p>
            Have a question or want to book our service?
            Contact us today.
          </p>
        </div>

        <div className="contact-grid">
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <strong>WhatsApp</strong>
            <span>Chat with us</span>
          </a>

          <a href={`tel:${business.phone}`}>
            <strong>Phone</strong>
            <span>{business.phone}</span>
          </a>

          <a href={`mailto:${business.email}`}>
            <strong>Email</strong>
            <span>{business.email}</span>
          </a>

          <div>
            <strong>Location</strong>
            <span>{business.location}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>{business.name}</h3>

        <p>
          © {new Date().getFullYear()} {business.name}.
          All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;
// App.js
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Dark mode toggle
    const toggleBtn = document.getElementById("toggle-dark");
    const body = document.body;
    const icon = toggleBtn?.querySelector(".icon");
    const label = toggleBtn?.querySelector(".label");

    if (localStorage.getItem("darkMode") === "true") {
      body.classList.add("dark");
    }

    function updateButton() {
      const isDark = body.classList.contains("dark");
      if (icon) icon.textContent = isDark ? "☀️" : "🌙";
      if (label) label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }

    updateButton();

    toggleBtn?.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("darkMode", body.classList.contains("dark"));
      updateButton();
    });

    // Copy email
    document.getElementById("copyEmail")?.addEventListener("click", () => {
      const email = "itscodeorchid@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        const button = document.getElementById("copyEmail");
        if (button) {
          button.textContent = "✅ Copied!";
          setTimeout(() => {
            button.textContent = "📋 Copy Email";
          }, 2000);
        }
      });
    });

    // Typewriter
    const phrases = [
      "Fullstack Developer.",
      "Frontend Designer.",
      "React Explorer.",
      "JavaScript in Motion.",
      "Creative Problem Solver.",
      "Engineering Elegant Solutions.",
      "Maker of Meaningful UI.",
      "Ruby on Rails Enthusiast.",
      "Movie Buff.",
      "CodeOrchid in Bloom."
    ];

    let currentPhrase = 0;
    let currentLetter = 0;
    let isDeleting = false;
    const speed = 40;
    const pause = 600;
    const typeText = document.getElementById("type-text");

    function typeLoop() {
      const current = phrases[currentPhrase];
      const visible = current.substring(0, currentLetter);
      if (typeText) typeText.textContent = visible;

      if (!isDeleting && currentLetter < current.length) {
        currentLetter++;
        setTimeout(typeLoop, speed);
      } else if (isDeleting && currentLetter > 0) {
        currentLetter--;
        setTimeout(typeLoop, speed / 2);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeLoop, pause);
      }
    }
    typeLoop();
  }, []);

  return (
    <div>
      <header className="hero">
        <button id="toggle-dark" className="dark-mode-toggle">
          <span className="icon">🌙</span> <span className="label">Dark Mode</span>
        </button>

        <div className="hero-content">
          <h1>CodeOrchid</h1>
          <p className="hero-tagline">Code freely. Build beautifully.</p>
          <p><span id="type-text"></span><span id="cursor">|</span></p>
          <div className="scroll-down">↓</div>
        </div>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="about" className="fade-in">
          <h2>About Me</h2>
          <p>I'm <span className="name-highlight">Kat</span> — a full-stack developer with a background in government and social services...</p>
        </section>

        <section id="projects" className="fade-in">
          <h2 className="projects-heading">Projects</h2>
          {/* Add project cards here as needed */}
        </section>

        <section className="contact-section fade-in" id="contact">
          <div className="contact-info">
            <h2>Contact</h2>
            <p>
              You can reach me at <a href="mailto:itscodeorchid@gmail.com">itscodeorchid@gmail.com</a>
            </p>
            <p><em>or</em></p>
            <p>
              <button id="copyEmail" className="copy-button">📋 Copy Email</button>
            </p>
          </div>
        </section>

        <div className="orchid-bloom">
          <h3 className="orchid-title">CodeOrchid... is in Bloom</h3>
          <img src="/images/purple-orchid.gif" alt="Orchid Blooming" className="orchid-gif" />
        </div>
      </main>

      <footer className="full-bleed">
        <p>&copy; 2025 CodeOrchid. All rights reserved.</p>
        <div className="footer-quote fade-in">
          <hr className="quote-divider" />
          <p><em>"All boundaries are conventions..."</em></p>
          <p><em>- Cloud Atlas</em></p>
        </div>
      </footer>
    </div>
  );
}

export default App;

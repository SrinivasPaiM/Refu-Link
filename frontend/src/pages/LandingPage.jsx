import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    window.open('https://www.unhcr.org/in/', '_blank');
  };

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <button className="auth-button" onClick={() => navigate('/login')}>
          Sign Up / Login
        </button>
      </nav>

      <main className="landing-content">
        <section className="hero-section">
          <h1>
            <span className="brand-name">RefuLink</span>
            <span className="heading-separator">: </span>
            <span className="heading-text">Empowering Refugees Through Work</span>
          </h1>
          <div className="hero-tagline">Building Bridges to a Brighter Future</div>
          <div className="hero-description">
            RefuLink is a smart job-matching platform that connects refugees with meaningful employment opportunities
            based on their skills, experience, and aspirations. We bring together technology and compassion to create 
            real change.
          </div>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => navigate('/login')}>Get Started</button>
            <button className="cta-button secondary" onClick={handleLearnMore}>Learn More</button>
          </div>
        </section>

        <section className="features-section">
          <h2>What Makes RefuLink Special?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Intelligent Matching</h3>
              <p>Advanced algorithms suggest jobs that truly fit your background and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Opportunities Everywhere</h3>
              <p>Browse job opportunities state-wise and even internationally.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Insightful Dashboards</h3>
              <p>Visual data and insights help you track your growth and opportunities clearly.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;

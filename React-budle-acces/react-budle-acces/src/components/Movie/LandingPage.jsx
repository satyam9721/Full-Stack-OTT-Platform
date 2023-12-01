import React from 'react';
import './style.css'; // External CSS file
import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
       
      </header>
      
      <main>
        <section className="hero">
          <h1>Welcome to Satyam OTT Platform</h1>
          <p>Click On Get Started Button</p>
          <a href="http://localhost:5173/" className="cta-button">Get Started</a>
        </section>

       
      </main>
      <section className="hero">
     
        </section>
        <footer className="bg-dark text-light">
      
      <div className="text-center py-3 footer-bottom">
        <p>&copy; 2023 Techy Satyam. All Rights Reserved.</p>
      </div>
    </footer>
    
    </div>
    
  );
}



export default LandingPage;

import React, { useState, useEffect } from 'react'
import '../App.css'

function Home() {
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    document.title = 'Carl Hockey'
  }, [])

  return (
    <div className="app">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <img 
          src="/20200523_134826.jpg" 
          alt="Coastal landscape" 
          className="hero-image"
        />
        <div className="hero-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <span className="avatar-initial">CH</span>
              </div>
            </div>
            <h1 className="profile-name">Carl Hockey</h1>
            <p className="profile-title">send it</p>
            <p className="profile-bio">
              
            </p>
            <div className="profile-links">
              <a href="https://github.com/thebicycarl" target="_blank" rel="noopener noreferrer" className="link-button">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/carl-hockey/" target="_blank" rel="noopener noreferrer" className="link-button">
                LinkedIn
              </a>
              <button onClick={() => setShowContact(!showContact)} className="link-button">
                Contact
              </button>
            </div>
            {showContact && (
              <div className="contact-details">
                <p className="contact-item">carlmhockey@gmail.com</p>
                <p className="contact-item">+61492923571</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container">
          <section className="projects-section">
            <h2>working on</h2>
            <div className="projects-grid">
              <a href="https://unitstrength.com.au" target="_blank" rel="noopener noreferrer" className="project-item">
                <h3>unitstrength.com.au</h3>
              </a>
              <a href="https://rawimpact.org" target="_blank" rel="noopener noreferrer" className="project-item">
                <h3>rawimpact.org</h3>
              </a>
              <a href="/30th" className="project-item">
                <h3>30th birthday</h3>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home


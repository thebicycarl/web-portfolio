import React, { useState } from 'react'
import './ThirtyBirthday.css'

function ThirtyBirthday() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Where will we be staying?",
      answer: "Details to be added..."
    },
    {
      question: "What should I bring?",
      answer: "Details to be added..."
    },
    {
      question: "How do I get there?",
      answer: "Details to be added..."
    },
    {
      question: "What's included in the price?",
      answer: "Details to be added..."
    }
  ]

  const activities = [
    "Snorkeling",
    "Cliff jumping",
    "Kayaking",
    "Volleyball",
    "Traditional Filipino meals",
    "Island accomodation",
    "Unlimited Rum & soft drinks",
    "Live Music"
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="thirty-page">
      {/* Hero Section */}
      <div className="thirty-hero">
        <img 
          src="/30th hero image.jpg" 
          alt="Island hopping adventure" 
          className="thirty-hero-image"
        />
        <div className="thirty-hero-overlay"></div>
        <div className="thirty-hero-content">
          <div className="thirty-hero-stack">
            <div className="thirty-subtitle-top">Carl's 30th: 3 Day Expedition</div>
            <h1 className="thirty-title">ISLAND HOPPING</h1>
            <div className="thirty-subtitle-bottom">Coron to El Nido, Philippines</div>
            <div className="thirty-subtitle-dates">6, 7, 8 April 2026</div>
          </div>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="thirty-content">
        <div className="thirty-container">
          {/* Dates */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">Dates</h2>
            <div className="thirty-dates">
              <div className="thirty-date-item">
                <span className="thirty-date-day">6</span>
                <span className="thirty-date-month">APR</span>
              </div>
              <span className="thirty-date-separator">—</span>
              <div className="thirty-date-item">
                <span className="thirty-date-day">7</span>
                <span className="thirty-date-month">APR</span>
              </div>
              <span className="thirty-date-separator">—</span>
              <div className="thirty-date-item">
                <span className="thirty-date-day">8</span>
                <span className="thirty-date-month">APR</span>
              </div>
              <div className="thirty-date-year">2026</div>
            </div>
          </section>

          {/* Price */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">Price</h2>
            <div className="thirty-price">
              <span className="thirty-price-amount">$475</span>
              <span className="thirty-price-currency">AUD</span>
            </div>
          </section>

          {/* Activities */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">3 days of:</h2>
            <ul className="thirty-activities">
              {activities.map((activity, index) => (
                <li key={index} className="thirty-activity-item">{activity}</li>
              ))}
            </ul>
          </section>

          {/* Map */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">Location</h2>
            <div className="thirty-map-container">
              <img 
                src="/map.svg" 
                alt="Event location map" 
                className="thirty-map"
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">FAQ</h2>
            <div className="thirty-faq">
              {faqs.map((faq, index) => (
                <div key={index} className="thirty-faq-item">
                  <button 
                    className="thirty-faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="thirty-faq-toggle">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="thirty-faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ThirtyBirthday


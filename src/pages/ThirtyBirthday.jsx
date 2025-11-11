import React, { useState } from 'react'
import './ThirtyBirthday.css'

function ThirtyBirthday() {
  const [openFaq, setOpenFaq] = useState(null)
  const [rsvpData, setRsvpData] = useState({
    fullName: '',
    email: '',
    attendees: [],
    newAttendee: '',
    lockedIn: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const faqs = [
    {
      question: "Where will we be staying?",
      answer: "for the two nights on the expedition we will stay in island bungalows"
    },
    {
      question: "What do we do afterwards?",
      answer: "After the expedition what you do is up to you. I'll be staying in El Nido for a couple days, and we may have an after party there. Let me know if you'd like suggestions planning your next steps."
    },
    
    {
      question: "When do I have to confirm?",
      answer: "Lock in by the end of jan. I'll take a $100 deposit around then to confirm our boat(s) booking "
    },
    {
      question: "Can I invite others?",
      answer: "Should be fine, just run it by me first"
    },

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

  const handleRsvpChange = (field, value) => {
    setRsvpData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addAttendee = () => {
    if (rsvpData.newAttendee.trim()) {
      setRsvpData(prev => ({
        ...prev,
        attendees: [...prev.attendees, prev.newAttendee.trim()],
        newAttendee: ''
      }))
    }
  }

  const removeAttendee = (index) => {
    setRsvpData(prev => ({
      ...prev,
      attendees: prev.attendees.filter((_, i) => i !== index)
    }))
  }

  const handleRsvpSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const submissionData = {
        Name: rsvpData.fullName,
        Email: rsvpData.email,
        Attendee: rsvpData.attendees.join(', '),
        'Locked in': rsvpData.lockedIn === 'yes' ? 'yes lock me in 🔥' : rsvpData.lockedIn === 'keen' ? 'keen but will confirm later' : '',
        Timestamp: new Date().toISOString()
      }

      const response = await fetch('https://api.sheetbest.com/sheets/5e4718a7-59e8-41f1-9451-a8961cf56b2b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (response.ok) {
        setSubmitMessage('Cheahoo lets gooo!')
        // Reset form
        setRsvpData({
          fullName: '',
          email: '',
          attendees: [],
          newAttendee: '',
          lockedIn: ''
        })
      } else {
        throw new Error('Failed to submit RSVP')
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      setSubmitMessage('Error submitting RSVP. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
            <h1 className="thirty-title">
              <span className="thirty-title-line">ISLAND</span>
              <span className="thirty-title-line">HOPPING</span>
            </h1>
            <div className="thirty-subtitle-bottom">Coron to El Nido, Philippines</div>
            <div className="thirty-subtitle-dates">6, 7, 8 April 2026</div>
          </div>
          
          {/* RSVP Form */}
          <form className="thirty-rsvp-form" onSubmit={handleRsvpSubmit}>
            <input
              type="text"
              className="thirty-rsvp-input"
              placeholder="Full name"
              value={rsvpData.fullName}
              onChange={(e) => handleRsvpChange('fullName', e.target.value)}
              required
            />
            
            <input
              type="email"
              className="thirty-rsvp-input"
              placeholder="Email"
              value={rsvpData.email}
              onChange={(e) => handleRsvpChange('email', e.target.value)}
              required
            />
            
            <div className="thirty-attendees-wrapper">
              <div className="thirty-attendees-input">
                <input
                  type="text"
                  className="thirty-rsvp-input"
                  placeholder="Who else is coming?"
                  value={rsvpData.newAttendee}
                  onChange={(e) => handleRsvpChange('newAttendee', e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addAttendee()
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addAttendee}
                  className="thirty-add-plus"
                >
                  +
                </button>
              </div>
              {rsvpData.attendees.length > 0 && (
                <div className="thirty-attendees-list thirty-attendees-list-mobile">
                  {rsvpData.attendees.map((name, index) => (
                    <div key={index} className="thirty-attendee-tag">
                      {name}
                      <button
                        type="button"
                        onClick={() => removeAttendee(index)}
                        className="thirty-remove-attendee"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <select
              className="thirty-rsvp-input"
              value={rsvpData.lockedIn}
              onChange={(e) => handleRsvpChange('lockedIn', e.target.value)}
              required
            >
              <option value="" disabled>Locked in?</option>
              <option value="yes">yes lock me in 🔥</option>
              <option value="keen">keen but will confirm later</option>
            </select>
            
            {rsvpData.attendees.length > 0 && (
              <div className="thirty-attendees-list thirty-attendees-list-desktop">
                {rsvpData.attendees.map((name, index) => (
                  <div key={index} className="thirty-attendee-tag">
                    {name}
                    <button
                      type="button"
                      onClick={() => removeAttendee(index)}
                      className="thirty-remove-attendee"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <button type="submit" className="thirty-rsvp-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
            </button>
            {submitMessage && (
              <div className={`thirty-submit-message ${submitMessage.includes('Error') ? 'thirty-submit-error' : 'thirty-submit-success'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
        <div className="thirty-scroll-arrow">
          <span>↓</span>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="thirty-content">
        <div className="thirty-container">
          {/* Activities */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">$475 AUD for 3 days of:</h2>
            <ul className="thirty-activities">
              {activities.map((activity, index) => (
                <li key={index} className="thirty-activity-item">
                  {activity}
                  {activity === 'Live Music' && (
                    <div className="thirty-activity-note">tbc pending numbers</div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Map */}
          <section className="thirty-info-section">
            <h2 className="thirty-section-title">Location</h2>
            <div className="thirty-map-container">
              <img 
                src="/map 2.svg" 
                alt="Event location map" 
                className="thirty-map"
              />
            </div>
            <div className="thirty-location-text">
              <p>The expedition will be starting at 9am on 6th of April from the Coron docks. Finishing approx 5pm on 8th April in El Nido.</p>
              <p>Afterwards I recommend hanging out in El Nido for a couple days, then checking out Port Barton and Sabang beach on your way to fly out of Puerto Princesa. I'm sure there are plenty of other beautiful places in Palawan too if you have time.</p>
              <p>Check your flight prices flying through both Manila and Cebu. I also highly recommend exploring Cebu Island.</p>
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


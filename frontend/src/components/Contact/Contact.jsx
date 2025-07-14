import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'

const Contact = () => {
  const form = useRef()
  const recaptchaRef = useRef()
  const [messageSent, setMessageSent] = useState(false)
  const [error, setError] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()
    setError('')

    if (!window.grecaptcha || typeof window.grecaptcha.getResponse !== "function") {
      setError("CAPTCHA is not ready yet. Please wait a moment.")
      return
    }

    const recaptchaResponse = window.grecaptcha.getResponse()
    if (!recaptchaResponse) {
      setError("Please complete the CAPTCHA first.")
      return
    }

    const formData = new FormData(form.current)
    const name = formData.get("user_name")
    const email = formData.get("user_email")
    const message = formData.get("message")

    try {
      const res = await fetch("/.netlify/functions/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: name,
          user_email: email,
          message: message,
          token: recaptchaResponse,
        }),
      })
      

      const data = await res.json()
      if (res.ok) {
        setMessageSent(true)
        form.current.reset()
        window.grecaptcha.reset()
        setTimeout(() => setMessageSent(false), 5000)
      } else {
        setError(data.error || "Something went wrong.")
        window.grecaptcha.reset()
      }
    } catch (err) {
      setError("Failed to send message.")
      console.error(err)
    }
  }

useEffect(() => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
  script.async = true
  script.defer = true

  script.onload = () => {
    if (window.grecaptcha && !window.__RECAPTCHA_RENDERED__) {
      window.grecaptcha.ready(() => {
        const container = document.getElementById('recaptcha')
        if (container && container.childNodes.length === 0) {
          window.grecaptcha.render('recaptcha', {
            sitekey: '6LeE6IArAAAAAE8XdIoaZYa6ZDt-EfGQ5HVnCd8Y'
          })
          window.__RECAPTCHA_RENDERED__ = true
        }
      })
    }
  }

  document.body.appendChild(script)
}, [])


  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Get in Touch</h2>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        
        <div id="recaptcha" className="g-recaptcha" data-sitekey="6LeE6IArAAAAAE8XdIoaZYa6ZDt-EfGQ5HVnCd8Y"></div>

        <button type="submit">Send</button>

        {messageSent && <p className="success-message">Message sent successfully!</p>}
        {error && <p className="error-message">{error}</p>}

        <p className="email">
          or email here: <a href="mailto:felayniangel@gmail.com">felayniangel@gmail.com</a>
        </p>
      </form>

      <div className="social-wrapper">
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/anggela" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a></li>
          <li><a href="https://github.com/Legna10" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a></li>
          <li><a href="https://www.youtube.com/@angelafelayni" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a></li>
          <li><a href="https://www.instagram.com/hae.angell" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact

const nodemailer = require('nodemailer')
const fetch = require('node-fetch')

exports.handleContactForm = async (req, res) => {
  const { user_name, user_email, message, token } = req.body

  if (!token) return res.status(400).json({ error: 'Captcha token is missing' })

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  const response = await fetch(verifyURL, { method: 'POST' })
  const data = await response.json()

  if (!data.success) return res.status(400).json({ error: 'Captcha validation failed' })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: user_email,
    to: process.env.MAIL_USERNAME,
    subject: `Message from ${user_name}`,
    html: `<p><strong>Name:</strong> ${user_name}</p>
           <p><strong>Email:</strong> ${user_email}</p>
           <p><strong>Message:</strong><br>${message}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Send mail error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}

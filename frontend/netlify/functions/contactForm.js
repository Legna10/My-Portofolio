const nodemailer = require('nodemailer')
const fetch = require('node-fetch')

exports.handler = async (event) => {
  const { user_name, user_email, message, token } = JSON.parse(event.body)

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Captcha token is missing' }),
    }
  }

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  const response = await fetch(verifyURL, { method: 'POST' })
  const data = await response.json()

  if (!data.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Captcha validation failed' }),
    }
  }

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
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    }
  } catch (error) {
    console.error('Send mail error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}

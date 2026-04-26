import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, message } = body

    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

     const transporter = nodemailer.createTransport({
       host: process.env.SMTP_HOST,
       port: parseInt(process.env.SMTP_PORT || '587'),
       secure: process.env.SMTP_SECURE === 'true',
       auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
       },
     })

     const mailOptions = {
       from: process.env.SMTP_FROM || process.env.SMTP_USER,
       to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
       replyTo: email,
       subject: `New Contact Form Submission - ${service}`,
       html: `
         <h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Company:</strong> ${company || 'Not provided'}</p>
         <p><strong>Service Interested In:</strong> ${service}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
         <hr />
         <p><small>This email was sent from the GMT Consulting website contact form.</small></p>
       `,
     }

     await transporter.sendMail(mailOptions)

     return NextResponse.json({ 
       success: true, 
       message: 'Email sent successfully. Thank you for contacting us!' 
     })
   } catch (error) {
     console.error('Error sending email:', error)
     
     let errorMessage = 'Failed to send email. Please try again later.'
     if (error instanceof Error) {
       if (error.message.includes('Invalid login') || error.message.includes('BadCredentials')) {
         errorMessage = 'Email server authentication failed. Please contact support.'
       } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
         errorMessage = 'Unable to connect to email server. Please try again later.'
       }
     }
     
     return NextResponse.json(
       { error: errorMessage },
       { status: 500 }
     )
   }
}
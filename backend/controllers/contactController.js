const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL, // your email
      subject: `Contact Form from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({
      success: true,
      message: "Email sent"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed"
    });
  }
};
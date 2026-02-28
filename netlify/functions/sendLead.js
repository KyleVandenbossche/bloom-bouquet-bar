const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const mailOptions = {
      from: `"Bloom Bouquet Bar" <${process.env.ZOHO_USER}>`,
      replyTo: data.email,
      to: process.env.TO_EMAIL,
      cc: "channydean@gmail.com",
      subject: `🌸 New Lead: ${data.name}`,
      html: `
        <h2>New Sales Lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Event Date:</strong> ${data.date || "N/A"}</p>
        <p><strong>Event Type:</strong> ${data.type || "N/A"}</p>
        <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
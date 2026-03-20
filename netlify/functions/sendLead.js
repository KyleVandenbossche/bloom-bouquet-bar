const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const recipients = [process.env.TO_EMAIL, "channydean@gmail.com"].filter(Boolean);

    const mailOptions = {
sender: "bloom.bouquet.bar@zohomail.com",
from: "Bloom Bouquet Bar <bloom.bouquet.bar@zohomail.com>",
      to: recipients,
subject: `HARDCODE TEST - ${data.name || "Unknown"}`,
envelope: {
  from: "bloom.bouquet.bar@zohomail.com",
  to: recipients,
},
      html: `
        <h2>New Sales Lead</h2>
        <p><strong>Name:</strong> ${data.name || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email || "N/A"}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Event Date:</strong> ${data.date || "N/A"}</p>
        <p><strong>Event Type:</strong> ${data.type || "N/A"}</p>
        <p><strong>Package Deal:</strong> ${data.budget || "N/A"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${(data.message || "").replace(/\n/g, "<br />")}</p>
      `,
      text: `
New Sales Lead

Name: ${data.name || "N/A"}
Email: ${data.email || "N/A"}
Phone: ${data.phone || "N/A"}
Event Date: ${data.date || "N/A"}
Event Type: ${data.type || "N/A"}
Package Deal: ${data.budget || "N/A"}

Message:
${data.message || ""}
      `,
    };

    console.log("MAIL DEBUG", {
      sender: mailOptions.sender,
      from: mailOptions.from,
      to: mailOptions.to,
      envelope: mailOptions.envelope,
      subject: mailOptions.subject,
    });

    const info = await transporter.sendMail(mailOptions);
    console.log("MAIL SENT", info);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error("sendLead error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
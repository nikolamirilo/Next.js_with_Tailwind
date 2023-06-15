// const nodemailer = require("nodemailer");

// export default async function sendEmail(fullName, email, subject, category, description, images) {
//   try {
//     // Create a Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//       // Configure your email provider here (e.g., Gmail SMTP)
//       service: "Gmail",
//       auth: {
//         user: "ekoloskimarketing@gmail.com",
//         pass: "ekomarketing2023",
//       },
//     });

//     // Define the email template
//     let emailTemplate = `
//       Poštovana Nataša,

//       Nova poruka sa zvaničnog sajta Projekta "Fazon".

//       Ime i Prezime: ${fullName}
//       Email: ${email}
//       Naslov: ${subject}
//       Kategorija: ${category}
//       Opis: ${description}
//       Slike: ${images}

//       Srdaćan pozdrav,
//     `;

//     // Define the email options
//     let mailOptions = {
//       from: "ekoloskimarketing@gmail.com", // Sender address
//       to: "ekoloskimarketing@gmail.com", // Recipient address
//       subject: 'Nova poruka sa zvaničnog sajta Projekta "Fazon"', // Email subject
//       text: emailTemplate, // Plain text body
//     };

//     // Send the email
//     let info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

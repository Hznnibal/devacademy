import nodemailer from "nodemailer";

export async function sendVerificationEmail(to: string, url: string) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Barmajah Academy" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your email address",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Welcome to Barmajah Academy 👋</h2>
        <p>Please click the button below to verify your email address:</p>
        <a href="${url}" style="
          display: inline-block;
          background-color: #2563eb;
          color: #ffffff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          margin-top: 10px;
        ">
          Verify Email
        </a>
        <p>This link will expire in 1 hour.</p>
      </div>
    `,
  });
}

"use client"
import fetch from "node-fetch";

const sendEmail = async (recipientEmail: string, htmlContent: string) => {
  const apiKey = process.env.EMAIL_TOKEN; // Use your actual API key here

  const response = await fetch("https://api.sender.net/v2/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      subject: "Your Order Confirmation",
      html: htmlContent,
      recipients: [
        {
          email: recipientEmail,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("Email sent successfully:", data);
};
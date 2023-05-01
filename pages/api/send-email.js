import nodemailer from "nodemailer";

export default async (req, res) => {
	if (req.method === "POST") {
		// Destructure the data from the request body
		const { name, email, message } = req.body;

		try {
			// Configure the email transport using your email service
			const transporter = nodemailer.createTransport({
				host: process.env.EMAIL_HOST,
				port: process.env.EMAIL_PORT,
				secure: false,
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASS,
				},
			});

			// Prepare the email content
			const mailOptions = {
				from: email,
				to: process.env.EMAIL_RECEIVER,
				subject: `New email from ${name}`,
				text: message,
			};

			// Send the email
			await transporter.sendMail(mailOptions);

			// Send a success response
			res.status(200).json({ success: true });
		} catch (error) {
			// Send an error response
			res.status(500).json({ error: error.message });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
};

import { useState } from "react";

export default function ReachtOut() {
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Extract form data
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		// Send data to API endpoint
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send email");
			}

			// Handle success
			alert("Email sent successfully");
		} catch (error) {
			// Handle error
			alert("Error sending email: " + error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" required />

			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				required
			/>

			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				name="message"
				required></textarea>

			<button type="submit">Send Email</button>
		</form>
	);
}

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ReachtOut() {
	const [state, handleSubmit] = useForm("xnqywveb");
	if (state.succeeded) {
		return (
			<p>
				Thanks reaching out, I will be in contact shortly!
			</p>
		);
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-md mx-auto space-y-3 p-8">
			<label
				htmlFor="email"
				className="block text-sm font-medium text-pink-950">
				Email Address
			</label>
			<input
				id="email"
				type="email"
				name="email"
				className="w-full px-3 py-2 placeholder-pink-900 text-pink-900 bg-transparent border-2 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
				className="text-red-600 text-sm"
			/>
			<label
				htmlFor="message"
				className="block text-sm font-medium text-pink-950">
				Leave me a message
			</label>
			<textarea
				id="message"
				name="message"
				className="w-full px-3 py-2 placeholder-pink-900 text-pink-900 bg-transparent border-2 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
				className="text-red-600 text-sm"
			/>
			<button
				type="submit"
				disabled={state.submitting}
				className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-800 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Submit
			</button>
		</form>
	);
}

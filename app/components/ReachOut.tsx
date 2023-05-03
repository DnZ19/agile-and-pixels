import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect } from "react";

export default function ReachtOut() {
	const [state, handleSubmit] = useForm("xnqywveb");
	useEffect(() => {
		if (state.succeeded) {
			const timer = setTimeout(() => {
				window.location.href = "/";
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [state.succeeded]);

	if (state.succeeded) {
		return (
			<p>
				Thanks for reaching out, I will be in contact
				shortly!
			</p>
		);
	}

	return (
		<>
			<h1 className="text-4xl md:text-6xl xl:text-8xl md:mt-12 xl:mt-16 mb-16 flex flex-col items-center justify-center">
				Let's get in touch.
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md mx-auto space-y-3 p-8">
				<input
					id="name"
					type="name"
					name="name"
					placeholder="Your name"
					className="w-full px-3 py-2 text-pink-100 placeholder-pink-100 bg-black rounded-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
				/>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email"
					className="w-full px-3 py-2 text-pink-100 placeholder-pink-100 bg-black rounded-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
					className="text-red-600 text-sm"
				/>
				<textarea
					id="message"
					name="message"
					placeholder="Leave me a message..."
					className="w-full h-20 px-3 py-2 text-pink-100 placeholder-pink-100 bg-black rounded-sm focus:outline-none focus:ring-pink-500 focus:border-pink-100 sm:text-sm"
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
					className="w-20 px-4 py-2 text-sm font-medium text-white bg-transparent border-2 border-secondairyColor rounded-md hover:bg-tertiaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-100">
					Submit
				</button>
			</form>
		</>
	);
}

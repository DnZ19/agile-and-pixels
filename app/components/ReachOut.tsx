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
			<h1 className="text-4xl md:text-6xl xl:text-6xl md:mt-12 xl:mt-16 mb-16 text-center">
				Let's get in touch
				<span className="text-secondairyColor">...</span>
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md mx-auto space-y-3 p-8">
				<input
					id="name"
					type="name"
					name="name"
					placeholder="Your name"
					className="w-full px-3 py-2 text-secondairyColor placeholder-slate-100 bg-white bg-opacity-5 rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 sm:text-sm"
				/>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your email"
					className="w-full px-3 py-2 text-secondairyColor placeholder-slate-100 bg-white bg-opacity-5 rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 sm:text-sm"
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
					rows={parseInt("5")}
					className="w-full px-3 py-2 text-secondairyColor placeholder-slate-100 bg-white bg-opacity-5 rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 sm:text-sm"
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
					className="w-auto px-3 py-2 text-buttonText placeholder-slate-900 bg-tertiaryColor rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 sm:text-sm lg:text-lg lg:font-semibold hover:bg-transparent hover:border-1 hover:text-tertiarColor">
					Submit
				</button>
			</form>
		</>
	);
}

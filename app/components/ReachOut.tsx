"use client";

import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ReachtOut() {
	const [state, handleSubmit] = useForm("xnqywveb");
	const tl = gsap.timeline({ defaults: { duration: 1 } });
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	const start =
		"M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 250 0.999512 250 0.999512";
	const end =
		"M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 250 0.999512 250 0.999512";

	const handleFocus = (
		id: string,
		placeholderId: string
	) => {
		const tl = gsap.timeline({ defaults: { duration: 1 } });
		tl.fromTo(
			`#${id}`,
			{ attr: { d: start } },
			{
				attr: { d: end },
				ease: "Power2.easeOut",
				duration: 0.75,
			}
		);
		tl.to(
			`#${id}`,
			{
				attr: { d: start },
				ease: "elastic.out(3,0.5)",
			},
			"<50%"
		);
		tl.to(
			`#${placeholderId}`,
			{
				top: -15,
				left: 0,
				scale: 0.7,
				duration: 0.5,
				ease: "Power2.easeOut",
			},
			"<15%"
		);
	};

	//revert back not focussed

	const handleBlur = (
		event: React.FocusEvent<HTMLInputElement>
	) => {
		const id = `elastic-line-${event.target.name}`;
		const placeholderId = `placeholder${
			event.target.name.charAt(0).toUpperCase() +
			event.target.name.slice(1)
		}`;

		if (!event.target.value) {
			const tl = gsap.timeline({
				defaults: { duration: 1 },
			});
			tl.to(`#${id}`, { attr: { d: start } });
			tl.to(`#${placeholderId}`, {
				top: 0,
				scale: 1,
				duration: 0.5,
				ease: "Power2.easeOut",
			});
		}
	};

	const handleNameFocus = () => {
		handleFocus("elastic-line-name", "placeholderName");
		setName(true);
	};

	const handleEmailFocus = () => {
		handleFocus("elastic-line-email", "placeholderEmail");
		setEmail(true);
	};

	const handleNumberFocus = () => {
		handleFocus("elastic-line-number", "placeholderNumber");
		setNumber(true);
	};

	const containers = useEffect(() => {
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
		<div>
			<h1 className="text-4xl md:text-6xl xl:text-6xl md:mt-12 xl:mt-16 mb-16 text-center">
				Let's get in touch
				<span className="text-secondairyColor">...</span>
			</h1>
			<form
				onSubmit={handleSubmit}
				className="w-80 max-w-sm mx-auto space-y-3 p-8 flex flex-col justify-between gap-4">
				<div
					id="input_container"
					className="relative"
					onFocus={handleNameFocus}>
					<p
						id="placeholderName"
						className="text-sm relative z-10 pointer-events-none origin-left">
						Your Name
					</p>
					<input
						type="text"
						name="name"
						autoComplete="off"
						id="name"
						onBlur={handleBlur}
						className="bg-transparent border-none f h-full w-full absolute top-0 focus:outline-none text-tertiarColor text-sm"
					/>
					<svg
						id="line-svg"
						width="250"
						height="2"
						viewBox="0 0 250 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-0 bottom-0 overflow-visible opacity-60 ">
						<path
							id="elastic-line-name"
							d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 250 0.999512 250 0.999512"
							stroke="#D1D4DA"
							strokeWidth="2"
						/>
					</svg>
				</div>

				<div
					id="input_container"
					className="relative"
					onFocus={handleEmailFocus}>
					<p
						id="placeholderEmail"
						className="text-sm relative z-10 pointer-events-none origin-left">
						Your Email
					</p>
					<input
						type="text"
						name="email"
						autoComplete="off"
						id="email"
						onBlur={handleBlur}
						className="bg-transparent border-none h-full w-full absolute top-0 focus:outline-none  text-tertiarColor text-sm"
					/>
					<svg
						id="line-svg"
						width="250"
						height="2"
						viewBox="0 0 250 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-0 bottom-0 overflow-visible opacity-60 ">
						<path
							id="elastic-line-email"
							d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 250 0.999512 250 0.999512"
							stroke="#D1D4DA"
							strokeWidth="2"
						/>
					</svg>
				</div>

				<div
					id="input_container"
					className="relative"
					onFocus={handleNumberFocus}>
					<p
						id="placeholderNumber"
						className="text-sm relative z-10 pointer-events-none origin-left">
						Your Phone Number
					</p>
					<input
						type="text"
						name="number"
						autoComplete="off"
						id="number"
						onBlur={handleBlur}
						className="bg-transparent border-none h-full w-full absolute top-0 focus:outline-none  text-tertiarColor text-sm"
					/>
					<svg
						id="line-svg"
						width="250"
						height="2"
						viewBox="0 0 250 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-0 bottom-0 overflow-visible opacity-60 ">
						<path
							id="elastic-line-number"
							d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 250 0.999512 250 0.999512"
							stroke="#D1D4DA"
							strokeWidth="2"
						/>
					</svg>
				</div>

				<textarea
					id="message"
					name="message"
					placeholder="Leave me a message..."
					rows={parseInt("5")}
					className="text-sm w-[250px] px-1 py-1 text-secondairyColor placeholder-slate-100 bg-white bg-opacity-5 rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
					className="text-red-600 text-sm"
				/>

				<div
					id="promo"
					className="w-[250px] flex relative overflow-hidden">
					<div
						id="check_box"
						className="mr-2 relative h-4 w-4 rounded-xl">
						<span
							id="checkmark"
							className="absolute left-0 bottom-0 w-full h-full border-2 border-white rounded-sm"></span>
						<div
							id="checkbox_fill"
							className="absolute bg-orange w-full h-full top-4"></div>
						<input
							id="checkbox"
							type="checkbox"
							className="absolute bottom-0 left-0 w-full h-full border-2 border-white rounded-sm opacity-0 cursor-pointer"
						/>
						<svg
							width="19"
							height="16"
							viewBox="0 0 19 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							id="tick-mark"
							className="absolute left-[-2px] z-20 scale-75">
							<path
								id="elastic-line"
								d="M2 8.5L6.5 13L17.5 2"
								stroke="white"
								strokeWidth="4"
							/>
						</svg>
					</div>
					<label
						id="checkbox_label"
						className="relative text-xs">
						Send me job opportunities.
					</label>
				</div>

				<button
					type="submit"
					disabled={state.submitting}
					className="w-auto px-3 py-2 text-buttonText placeholder-slate-900 bg-tertiaryColor rounded-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 sm:text-sm lg:text-lg lg:font-semibold hover:bg-transparent hover:border-1 hover:text-tertiarColor">
					Submit
				</button>
			</form>
		</div>
	);
}

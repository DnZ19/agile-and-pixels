"use client";

import { useState } from "react";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="flex flex-col justify-between items-center py-8 px-6 w-full lg:flex-row lg:justify-center lg:max-w-custom">
			<div className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-center justify-center w-full lg:items-start lg:py-0 lg:mt-4">
					<h1 className="font-custom-font-logo text-4xl sm:text-6xl sm:mb-8 md:text-8xl md:mb-10 text-mainColor opacity-50 mt-6 lg:text-5xl lg:mb-0 lg:mt-0">
						Agile & Pixels
					</h1>
					<p className="mt-1 text-xs md:text-lg text-mainColor font-light italic lg:mb-0 lg:mt-0lg:text-xs xl:text-lg">
						Agile Coaching / Frontend / Fullstack
					</p>
				</div>
			</div>
			{/* Hamburger Menu */}
			<div className="lg:hidden flex items-center justify-center">
				<button
					className={`top-0 right-0 text-mainColor p-2 rounded-md focus:outline-none mt-8 z-50`}
					onClick={toggleMenu}>
					<svg
						className={`h-6 w-6 ${
							isMenuOpen ? "hidden" : "block"
						}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
					<svg
						className={`h-6 w-6  ${
							isMenuOpen
								? "block top-0 right-0 absolute my-4 mx-4"
								: "hidden"
						}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			{/* Navigation Links */}
			<ul
				className={`flex items-center text-mainColor text-lg md:text-xl lg:text-2xl lg:gap-10 ${
					isMenuOpen
						? "bg-mainBgColor w-full absolute left-0 top-0 h-48 flex flex-row justify-center py-4 lg:py-8 gap-2"
						: "hidden"
				} lg:flex flex-row`}>
				{/* Navigation Links */}
				<li className="flex justify-between items-center px-6 lg:px-0">
					resume
				</li>
				<li className="flex justify-between italic items-center px-6 lg:px-0">
					me
				</li>
				<li className="bg-transparent text-mainColor py-2 px-4 cursor-pointer rounded-md ">
					<button className="flex justify-center text-center border-2 border-secondairyColor border-opacity-60 text-mainColor py-2 px-4 rounded-md hover:bg-transparent hover:text-mainColor whitespace-nowrap hover:blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor">
						reach out
					</button>
				</li>
			</ul>
		</nav>
	);
}

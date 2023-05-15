"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="motion-safe:delay-1500 motion-safe:animate-fadeInThree flex flex-col justify-between items-center py-8 px-6 w-full lg:flex-row lg:justify-center lg:max-w-custom">
			<div className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-center justify-center w-full lg:items-start lg:py-0 lg:mt-4">
					<Link href="/" className="cursor-pointer">
						<h1 className="font-custom-font-logo text-4xl sm:text-6xl sm:mb-8 md:text-8xl md:mb-10 text-tertiarColor mt-6 lg:text-5xl lg:mb-0 lg:mt-0">
							Agile & Pixels
						</h1>
					</Link>
					<p className="mt-1 text-xs md:text-lg text-tertiaryColor font-custom-font-italic lg:pl-1 lg:mb-0 lg:mt-2 lg:text-xs xl:text-lg">
						Agile Coaching / Frontend / Fullstack
					</p>
					<span className="text-xs italic text-secondairyColor">
						(mvp version)
					</span>
				</div>
			</div>

			{/* Hamburger Menu */}
			<div className="lg:hidden flex items-center justify-center">
				<button
					className={`top-0 right-0 text-mainColor p-2 rounded-md focus:outline-none mt-8 z-50`}
					onClick={toggleMenu}>
					<svg
						className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${
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
						className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 ${
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
						? "bg-mainBgColor w-full absolute left-0 top-0 h-48 flex flex-row justify-center py-4 lg:py-4 gap-2"
						: "hidden"
				} lg:flex flex-row`}>
				{/* Navigation Links */}
				<a
					href="https://www.linkedin.com/in/dennisrijkers/"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li className="flex justify-between items-center px-4 lg:px-0 hover:text-tertiarColor">
						resume
					</li>
				</a>
				<Link
					href="/me"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li className="flex justify-between italic items-center px-4 lg:0 hover:text-tertiarColor">
						me
					</li>
				</Link>
				<Link
					href="/contact"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li className="bg-transparent text-mainColor py-2 px-4 cursor-pointer rounded-md">
						<button className="flex justify-center text-center border-2 border-secondairyColor border-opacity-60 text-mainColor py-2 px-4 rounded-md hover:bg-transparent hover:text-secondairyColor whitespace-nowrap hover:blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor">
							reach out
						</button>
					</li>
				</Link>
			</ul>
		</nav>
	);
}

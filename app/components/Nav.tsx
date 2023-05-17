"use client";

import { useState } from "react";
import Link from "next/link";
import { SiLinkedin } from "react-icons/all";

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
							Agile & Pi
							<span className="text-white">x</span>els
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
							isMenuOpen
								? "opacity-0"
								: "opacity-100 ease-in duration-1000 delay-700"
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
						className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 transform ${
							isMenuOpen
								? "opacity-100 top-0 right-0 absolute my-4 mx-4"
								: "opacity-0 absolute"
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

			<ul
				className={`flex items-center text-mainColor text-lg md:text-xl lg:text-2xl lg:gap-10 transform transition-transform duration-1000 ease-in-out ${
					isMenuOpen
						? "bg-secondaryColor w-full absolute left-0 top-0 h-48 flex flex-row justify-center py-4 lg:py-4 gap-2 translate-y-0 delay-75"
						: "bg-secondaryColor w-full absolute left-0 top-0 h-48 flex flex-row justify-center py-4 lg:py-4 gap-2 delay-700 translate-y-[-100%]"
				} lg:flex flex-row`}>
				{/* Navigation Links */}

				<a
					href="https://www.linkedin.com/in/dennisrijkers/"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li
						className={`flex justify-between items-center text-4xl px-4 lg:px-0 hover:text-tertiarColor transition-opacity delay-300 duration-1000 ease-in ${
							isMenuOpen
								? "opacity-100"
								: "opacity-0 ease-out duration-1000 delay-500"
						}`}>
						<SiLinkedin />
					</li>
				</a>
				<Link
					href="/me"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li
						className={`flex justify-between items-center text-2xl italic px-4 lg:px-0 hover:text-tertiarColor transition-opacity delay-700 duration-1000 ease-in ${
							isMenuOpen
								? "opacity-100"
								: "opacity-0 ease-out duration-1000 delay-300"
						}`}>
						me
					</li>
				</Link>
				<Link
					href="/contact"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li
						className={`bg-transparent text-white font-custom-font-logo py-2 px-2 cursor-pointer rounded-md items-center transition-opacity delay-1000 duration-1000 ease-in ${
							isMenuOpen
								? "opacity-100"
								: "opacity-0 ease-out duration-1000 delay-150"
						}`}>
						<button className="flex justify-center text-center border-2 border-tertiaryColor border-dotted border-opacity-60 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-secondairyColor whitespace-nowrap hover:blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor">
							te<span className="text-tertiarColor">x</span>
							t me
						</button>
					</li>
				</Link>
			</ul>
		</nav>
	);
}

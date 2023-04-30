"use client";

import { useState } from "react";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="flex flex-col sm:flex-row justify-between items-center py-8 px-6 w-full max-h-60 mt-[-130px] md:mt-[-90px] lg:max-h-20 lg:mt-[-20px] lg:py-14">
			<div className="flex flex-col items-center justify-center w-full lg:flex-row sm:justify-between md:mt-2 lg:mt-5">
				<div className="flex items-center gap-4 sm:flex-row justify-center sm:items-center">
					<img
						src="/logo2-color.svg"
						alt="Logo"
						className="object-contain max-w-md overflow-hidden md:ml-[-250px] lg:ml-[-50px] lg:max-w-2xl"
					/>
					<p className="hidden md:block md:text-xs mx-[-60px] font-extralight">
						Agile / Frontend / Fullstack
					</p>
				</div>
			</div>
			{/* Hamburger Menu */}
			<div className="lg:hidden flex items-center justify-center">
				<button
					className={`top-0 right-0 text-white p-2 rounded-md focus:outline-none mt-[-200px] md:-mt-0 z-50`}
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
				className={`flex items-center gap-12 ${
					isMenuOpen
						? "bg-secondaryColor w-full absolute left-0 top-0 h-48 flex flex-row justify-center py-8 gap-2"
						: "hidden"
				} lg:flex lg:gap-0 lg:mt-4 lg:ml-auto`}>
				{/* Navigation Links */}
				<li className="flex justify-between items-center px-6">
					resume
				</li>
				<li className="flex justify-between items-center px-6">
					me
				</li>
				<li className="bg-transparent text-white py-2 px-4 cursor-pointer rounded-md ">
					<button className="flex justify-center text-center border-2 border-mainColor text-gray-800 md:text-mainColor py-2 px-4 rounded-md hover:bg-transparent hover:text-mainColor whitespace-nowrap hover:blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor">
						reach out
					</button>
				</li>
			</ul>
		</nav>
	);
}

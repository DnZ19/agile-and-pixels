"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { gsap } from "gsap";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		gsap.set("#left-feather", {
			scale: 0,
			transformOrigin: "center",
		});

		gsap.set("#right-feather", {
			scale: 0,
			transformOrigin: "center",
		});
	}, []);

	const home = () => {
		const tl = gsap.timeline({
			defaults: {
				duration: 0.35,
				ease: "power2.easeOut",
			},
		});

		tl.to("#home-svg", {
			scale: 0.9,
			yoyo: true,
			repeat: 1,
		});

		tl.to("#left-feather", {
			y: 20,
			scale: 1.5,
			autoAlpha: 1,
			duration: 2,
		});

		tl.to("#right-feather", {
			y: 20,
			scale: 1.5,
			autoAlpha: 1,
			duration: 1,
		});

		tl.to("#right-feather", { x: 5 });
		closeMenu();
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
						className={`h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 ${
							isMenuOpen
								? "opacity-0"
								: "opacity-100 ease-in duration-1000 delay-700"
						}`}
						fill="none"
						viewBox="0 0 28 28"
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
						viewBox="0 0 28 28"
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
						: "bg-secondaryColor w-full absolute sm:left-0 top-0 h-48 flex flex-row justify-center py-4 lg:py-4 gap-2 delay-700 translate-y-[-100%] md:translate-y-0 md:bg-transparent md:relative md:h-0 md:w-auto md:hidden"
				} lg:flex flex-row`}>
				{/* Navigation Links */}

				<Link
					href="/"
					className="cursor-pointer"
					onClick={home}>
					<li
						className={`flex justify-between items-center text-2xl italic px-2 pb-2 lg:px-0 hover:text-tertiarColor transition-opacity delay-700 duration-1000 ease-in ${
							isMenuOpen
								? "opacity-100"
								: "opacity-0 ease-out duration-1000 delay-300 md:opacity-100"
						}`}>
						<svg
							id="home-svg"
							width="43"
							height="43"
							viewBox="0 0 43 43"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g>
								<path
									d="M35.6667 25.3372L32.0833 43.4384H10.5833L7 25.3372L21.3333 12L35.6667 25.3372ZM23.125 36.2717C23.125 35.2827 22.3223 34.48 21.3333 34.48C20.3443 34.48 19.5417 35.2827 19.5417 36.2717C19.5417 37.2607 20.3443 38.0634 21.3333 38.0634C22.3223 38.0634 23.125 37.2607 23.125 36.2717ZM24.9167 27.3134C24.9167 25.3336 23.3113 23.73 21.3333 23.73C19.3553 23.73 17.75 25.3336 17.75 27.3134C17.75 29.2932 19.3553 30.8967 21.3333 30.8967C23.3113 30.8967 24.9167 29.2932 24.9167 27.3134Z"
									fill="white"
									id="house"
								/>
								<path
									d="M40.5615 24.5983L43 21.9735L21.5 2L0 21.9466L2.43846 24.5714L21.5 6.89125L40.5615 24.5983Z"
									fill="white"
									id="roof"
									className="hover:fill-tertiaryColor"
								/>
								<path
									d="M17.9348 27.7602C19.853 28.0433 24.4903 28.4395 26.569 27.3798L26.5362 27.1464C25.9127 27.5201 24.8348 27.7425 24.2349 27.7078C23.5709 26.5062 22.5195 25.9994 21.1388 26.0008C20.3967 26.0015 20.0267 26.3267 19.3043 26.4966C18.4519 26.6971 17.6208 26.2382 17.1033 26.9249C16.7954 27.3336 16.3937 27.8013 16.2334 28.3563C17.4839 27.9968 18.3635 28.7398 19.8639 29.6312C22.0715 30.9426 24.0877 29.7852 24.4008 28.0415C22.7824 28.2473 18.7308 28.254 17.9348 27.7602Z"
									fill="#f48c06"
									id="left-feather"
								/>
								<path
									d="M24.2067 27.203C22.2762 27.0206 17.6245 26.8676 15.6042 28.0347L15.6491 28.2661C16.2522 27.8602 17.317 27.5817 17.9179 27.585C18.6439 28.7502 19.7204 29.2012 21.0991 29.1276C21.8402 29.0881 22.1926 28.744 22.9051 28.5365C23.7458 28.2916 24.5998 28.7064 25.0807 27.9935C25.3668 27.5693 25.7435 27.0812 25.8745 26.5186C24.6445 26.943 23.7272 26.2471 22.1823 25.4354C19.909 24.2414 17.9562 25.5027 17.7347 27.2604C19.3402 26.9702 23.3858 26.7514 24.2067 27.203Z"
									fill="#f48c06"
									id="right-feather"
								/>
							</g>
						</svg>
					</li>
				</Link>

				<a
					href="https://www.linkedin.com/in/dennisrijkers/"
					target="_blank"
					rel="noopener noreferrer"
					className="cursor-pointer"
					onClick={closeMenu}>
					<li
						className={`flex justify-between items-center text-4xl px-2 lg:px-0 hover:text-tertiarColor transition-opacity delay-300 duration-1000 ease-in ${
							isMenuOpen
								? "opacity-100"
								: "opacity-0 ease-out duration-1000 delay-500 md:opacity-100"
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
								: "opacity-0 ease-out duration-1000 delay-300 md:opacity-100"
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
								: "opacity-0 ease-out duration-1000 delay-150 md:opacity-100"
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

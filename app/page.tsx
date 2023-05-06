"use client";

import Services from "./components/Services";
import React, { useState, useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const [showServices, setShowServices] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		const handleScroll = () => {
			if (window.scrollY > 50) {
				setShowServices(true);
			} else {
				setShowServices(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="h-full flex flex-col items-center max-w-custom px-2 mt-20 sm:mt-10 sm:w-full lg:h-auto lg:mt-44">
			<div className="h-96 px-4 flex flex-col items-center sm:mt-8 md:mb-20 lg:mt-10 lg:w-full">
				<h1 className="motion-safe:delay-500 motion-safe:animate-fadeInOne text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					Tell us{" "}
					<span className="italic font-bold text-pink-900">
						your
					</span>{" "}
					Agile Story
				</h1>
				<p className="motion-safe:delay-1000 motion-safe:animate-fadeInTwo text-xl md:text-4xl font-extralight text-center italic lg:text-2xl py-6">
					Together we will look for ways to let{" "}
					<span className="not-italic font-semibold underline text-pink-900">
						your organization
					</span>{" "}
					grow more{" "}
					<span className="font-medium text-pink-900">
						Agile
					</span>
					.
				</p>
				<Link href="/contact" className="cursor-pointer">
					<button className="flex justify-center text-center border-2 border-secondairyColor border-opacity-50 text-mainColor py-2 px-4 mt-6 w-28 rounded-md hover:bg-white hover:text-mainColor whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
						let's chat
					</button>
				</Link>
				<div>
					<IoMdArrowDown className="mt-16 text-4xl text-pink-900 lg:mt-20" />
				</div>
			</div>

			<div
				className={`transition-opacity duration-1000 ease-in-out py-2 px-4 pb-20 rounded-md flex flex-col items-center justify-center gap-12 sm:w-full lg:border-2 lg:border-opacity-10 lg:border-secondairyColor mt-12 mb-4 ${
					showServices ? "opacity-100" : "opacity-0"
				}`}>
				<h1 className="w-full flex justify-center text-4xl text-mainColor font-light">
					Services
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center h-auto lg:min-h-[300px] lg:items-start">
					<Link
						href="/agile_transition_service"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1391807393.jpg"
							name="Agile Transition"
							description="
							We provide expert consultants for agile transformation, customized framework and structure solutions tailored to your organization's needs, and change management strategies supported by MBA-level knowledge. Our services are designed to propel your organization towards success, ensuring a smooth and effective transition to agile methodologies."
						/>
					</Link>
					<Link
						href="/web_app_development_service"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1918258610.jpg"
							name="WebApp development"
							description="We offer skilled frontend engineers adept at building modern apps and software in an agile manner. Seamlessly integrating into your organization, they contribute to fostering a more Agile work environment while also possessing the potential to serve as Scrum Masters. Our engineers are dedicated to helping your team grow and adapt to the agile landscape, ensuring efficient project delivery and continuous improvement."
						/>
					</Link>
					<Link
						href="/coaching_facilitating_service"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1801873138.jpg"
							name="Facilitating teams & events"
							description="Our experts specialize in facilitating teams and agile events, ensuring a smooth and efficient process in your organization. With a deep understanding of agile methodologies, our facilitators help create a collaborative and adaptive environment, guiding your team towards continuous improvement and success. Whether it's sprint planning, retrospectives, or daily stand-ups, our services ensure that your team's progress is on track and in alignment with your organization's Agile goals."
						/>
					</Link>
					<Link
						href="/son_of_pollos"
						className="cursor-pointer">
						<Services
							image="/pink_pollos_logo.png"
							name="full son of pink pollos"
							description="Are you looking for a skilled frontend developer? We proudly collaborate with Pink Pollos, an organization renowned for its commitment to Agile methodologies and professionalism. By choosing our services, you benefit from top-notch frontend developers who are well-versed in Agile practices, ensuring seamless integration with your team and exceptional results. Don't miss out on this unique opportunity to elevate your project with the expertise of Pink Pollos' talented developers!"
						/>
					</Link>
				</div>

				{/* <div className="bg-cover w-auto mx-8 rounded-md mt-10 md:w-full md:p-4">
					<Image
						src="/pink_pollos_logo.png"
						alt="waterlogo"
						width={1000}
						height={800}
						className="rounded-md w-full"
					/>
				</div> */}
			</div>
		</main>
	);
}

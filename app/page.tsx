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
		<main className="h-full flex flex-col items-center max-w-custom px-6 mt-20 sm:mt-10 sm:w-full lg:h-auto lg:mt-44">
			<div className="h-96 px-8 flex flex-col items-center sm:mt-8 md:mb-20 lg:mt-10 lg:w-full">
				<h1 className="text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					Tell me{" "}
					<span className="italic font-bold text-pink-900">
						your
					</span>{" "}
					Agile Story
				</h1>
				<p className="text-xl md:text-4xl font-extralight text-center italic lg:text-2xl py-6">
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
					<button className="flex justify-center text-center border-2 border-secondairyColor border-opacity-50 text-mainColor py-2 px-4 mt-6 w-28 rounded-md hover:bg-transparent hover:text-white whitespace-nowrap hover:blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
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

				<div className="flex flex-col w-auto items-center justify-center gap-4 h-auto lg:flex-row lg:min-h-[300px] lg:items-start">
					<Link
						href="/agile-transition"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1391807393.jpg"
							name="Agile Transition"
							description="Our Agile Coach service empowers teams to reach their full potential in an agile environment. We offer tailored coaching and mentorship, guiding organizations through agile transformations, optimizing processes, fostering a culture of continuous improvement, and developing agile leadership skills. With our expertise, your team can enhance collaboration, adaptability, and project delivery, driving sustainable agile success."
						/>
					</Link>
					<Link
						href="/webshop-developement"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1918258610.jpg"
							name="WebApp development"
							description="Our Agile Coach service empowers teams to reach their full potential in an agile environment. We offer tailored coaching and mentorship, guiding organizations through agile transformations, optimizing processes, fostering a culture of continuous improvement, and developing agile leadership skills. With our expertise, your team can enhance collaboration, adaptability, and project delivery, driving sustainable agile success."
						/>
					</Link>
					<Link
						href="/coaching-and-facilitating-teams"
						className="cursor-pointer">
						<Services
							image="/shutterstock_1801873138.jpg"
							name="Coaching & Facilitating teams"
							description="Our Agile Coach service empowers teams to reach their full potential in an agile environment. We offer tailored coaching and mentorship, guiding organizations through agile transformations, optimizing processes, fostering a culture of continuous improvement, and developing agile leadership skills. With our expertise, your team can enhance collaboration, adaptability, and project delivery, driving sustainable agile success."
						/>
					</Link>
				</div>
				<div className="bg-cover w-auto mx-8 rounded-md mt-10 md:w-full">
					<Image
						src="/boat.png"
						alt="waterlogo"
						width={1000}
						height={800}
						className="rounded-md w-full"
					/>
				</div>
			</div>
		</main>
	);
}

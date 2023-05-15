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
				{/* <Image
					src="/backgroundImage.svg"
					width={500}
					height={500}
					alt={"dots"}
					className="absolute w-60 opacity-30 top-42 left-40 lg:w-full lg:left-80"
				/> */}
				<h1 className="motion-safe:delay-500 motion-safe:animate-fadeInOne text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					Tell me{" "}
					<span className="italic font-bold text-secondairyColor">
						your
					</span>{" "}
					Agile Story
				</h1>
				<p className="motion-safe:delay-1000 motion-safe:animate-fadeInTwo text-xl md:text-4xl font-extralight text-center italic lg:text-2xl py-6">
					Together we will look for ways to let{" "}
					<span className="not-italic font-semibold underline text-secondairyColor">
						your organization
					</span>{" "}
					grow more{" "}
					<span className="font-medium text-secondairyColor">
						Agile
					</span>
					.
				</p>
				<Link href="/contact" className="cursor-pointer">
					<button className="flex justify-center text-center bg-tertiaryColor text-buttonText py-2 px-4 mt-6 w-28 text-xl font-semibold rounded-md hover:bg-secondaryColor hover:text-secondairyColor whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
						Connect
					</button>
				</Link>
				<div>
					<IoMdArrowDown className="mt-16 text-4xl text-secondairyColor lg:mt-20" />
				</div>
			</div>

			<div
				className={`transition-opacity duration-1000 ease-in-out py-2 px-4 pb-20 rounded-md flex flex-col items-center justify-center gap-12 sm:w-full lg:border-2 lg:border-opacity-10 lg:border-secondairyColor mt-12 mb-4 ${
					showServices ? "opacity-100" : "opacity-0"
				}`}>
				<h1 className="w-full flex justify-center text-4xl lg:text-6xl text-slate-100 font-light">
					I can help you with...
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center justify-center h-auto lg:min-h-[300px] lg:items-start">
					<Link href="/contact" className="cursor-pointer">
						<Services
							image="/shutterstock_1391807393.jpg"
							name="Agile Coaching"
							description="
							If you need an Agile Coach with experience in Scaling Agile Teams, change management and technical knowledge, let's meet!"
						/>
					</Link>
					<Link href="/contact" className="cursor-pointer">
						<Services
							image="/shutterstock_1918258610.jpg"
							name="Scrum Master"
							description="If you need a more hands on approach in getting a team to the next level on high performance, call me!"
						/>
					</Link>
					<Link href="/contact" className="cursor-pointer">
						<Services
							image="/shutterstock_1801873138.jpg"
							name="Frontend Developement"
							description="Are you looking for a FrontEnd developer with a strong Agile background? I can help you."
						/>
					</Link>
					<Link
						href="http://www.pinkpollos.com"
						className="cursor-pointer">
						<Services
							image="/pinkpollosbackground.png"
							name="Looking for Talent?"
							description="If you are looking for Frontend and Agile Talent, Pink Pollos is the new go-to-place for you!"
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

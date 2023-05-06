"use client";

import Link from "next/link";
import Image from "next/image";

export default function Team() {
	return (
		<main className="h-full flex flex-col items-center max-w-custom mt-20 px-6 sm:mt-10 sm:w-full lg:h-auto lg:mt-10">
			<div className="h-auto mt-[-50px] px-8 flex flex-col items-center sm:mt-3 md:mb-20 lg:mt-0 lg:w-full">
				<h1 className="text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					A little{" "}
					<span className="italic font-bold text-pink-900">
						about
					</span>{" "}
					our own story.
				</h1>
				<p className="max-w-8xl text-xl md:text-4xl font-extralight text-justify italic lg:text-2xl lg:mt-10">
					<div className="bg-cover w-800 float-left mr-6 mt-2">
						<Image
							src="/boat.png"
							alt="waterlogo"
							width={500}
							height={500}
							className="w-full"
						/>
					</div>
					Our journey began with a highly capable Agile
					team, where we mastered various skills and formed
					lasting bonds with our fellow members. This
					incredible experience laid the foundation for our
					understanding of what it takes to thrive in a
					high-performing team. Over the years, our
					expertise has expanded rapidly as we worked with
					diverse organizations and participated in numerous
					Agile transitions.
					<br />
					<br />
					We've noticed that young professionals often don't
					receive adequate Agile training in their academic
					or early professional environments. This lack of
					knowledge can hinder their integration into Agile
					teams, causing difficulties for both the newcomers
					and their colleagues. We believe that young
					professionals should be well-versed in Agile
					practices right from the start.
					<br />
					<br />
					That's where we come in. We not only train our
					professionals in their specific areas of
					expertise, but we also emphasize the Agile way of
					working and mentor them in the assignment. By
					equipping them with the necessary skills and
					knowledge, we ensure a swift learning curve and
					seamless integration into any Agile project. Allow
					us to help you build and maintain high-performing
					teams that drive success and foster a culture of
					continuous improvement.
				</p>
				<div className="w-full mt-6 flex flex-row justify-center items-center">
					<Link href="/contact" className="cursor-pointer">
						<button className="text-center border-2 border-secondairyColor border-opacity-50 text-secondairyColor py-2 px-4 mt-6 w-28 rounded-md hover:bg-transparent hover:text-white whitespace-nowrap hover:blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
							let's chat
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}

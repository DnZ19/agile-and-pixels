"use client";

import Link from "next/link";
import Image from "next/image";

export default function Team() {
	return (
		<main className="h-full flex flex-col items-center max-w-custom mt-20 px-2 sm:mt-10 sm:w-full lg:h-auto lg:mt-10">
			<div className="h-auto mt-[-50px] px-8 flex flex-col items-center sm:mt-3 md:mb-20 lg:mt-0 lg:w-full">
				<h1 className="text-center text-6xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					A little{" "}
					<span className="font-custom-font-italic text-secondairyColor">
						about
					</span>{" "}
					me.
				</h1>
				<p className="max-w-8xl text-md md:text-4xl font-extralight text-justify lg:text-2xl lg:mt-10">
					<div className="bg-cover w-800 md:float-left md:mr-6 mt-4 mb-8">
						<Image
							src="/rails.png"
							alt="waterlogo"
							width={500}
							height={500}
							className="w-full"
						/>
					</div>
					I was born in Delft and raised in Utrecht, and
					I've always had a knack for creativity and
					adaptability. I understand that change can be
					challenging, but it's also an integral part of
					growth and development.
					<br />
					<br />
					I hold both a Bachelor's and Master's degree in
					Change Management, and my experience as a
					consultant and coach has taught me that every
					organization is unique. As such, they all require
					a different approach when it comes to managing
					change. In a nutshell, I'm a starter. I like to
					get things going, particularly when it comes to
					change. However, I can't make the changes for you
					- my role is to guide and assist. If you need
					someone to initiate change, feel free to reach out
					to me.
					<br />
					<div className="bg-cover w-800 md:hidden md:mr-6 mt-4 mb-4">
						<Image
							src="/lake.png"
							alt="waterlogo"
							width={500}
							height={500}
							className="w-full"
						/>
					</div>
					<br />
					Additionally, if you want a more hands on approach
					and develop a team from an Agile or technical
					perspective, I'd be more than happy to help as
					well. I believe in working directly with teams,
					rather than just giving advice from the sidelines.
					If necessary, I can also contribute to frontend
					development as a full stack developer. Interested
					in discussing what we can achieve together? Just
					hit the button and let's talk.
				</p>
				<div className="w-full mt-6 flex flex-row justify-center items-center">
					<Link href="/contact" className="cursor-pointer">
						<button className="flex justify-center text-center bg-tertiaryColor text-buttonText py-2 px-4 mt-6 w-28 text-xl font-semibold rounded-md hover:bg-secondaryColor hover:text-secondairyColor whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
							let's talk
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}

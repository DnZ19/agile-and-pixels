"use client";

import Link from "next/link";
import Image from "next/image";

export default function Team() {
	return (
		<main className="h-full flex flex-col items-center max-w-custom mt-20 px-6 sm:mt-10 sm:w-full lg:h-auto lg:mt-10">
			<div className="h-auto mt-[-50px] px-8 flex flex-col items-center sm:mt-3 md:mb-20 lg:mt-0 lg:w-full">
				<h1 className="text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					A little{" "}
					<span className="italic font-bold text-secondairyColor">
						about
					</span>{" "}
					my own story.
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
					Welcome to a world where change is not just a
					necessity but a catalyst for growth. A world that
					thrives on evolution, opening up new landscapes to
					explore and fresh opportunities to seize every
					day. In this dynamic landscape, I've found my
					calling - merging my passion for change with my
					profession, leveraging my MBA in Change Management
					to make a tangible difference.
					<br />
					<br />
					As a seasoned Agile coach and consultant, my
					commitment is not merely to facilitate
					transformation but to empower individuals, teams,
					and organisations to become change-makers. Having
					extensively studied and mastered the complexities
					of organisational change during my MBA, I
					understand that the process can often feel like
					navigating a labyrinth. However, with the Agile
					mindset and the right guidance, we can transform
					these complexities into stepping stones towards
					progress.
					<br />
					<br />
					Change begins with understanding the 'Why'. Why is
					Agile the right choice for you? Why should your
					team or organisation evolve? The resonance of this
					'Why' is the ignition point for your Agile journey
					- a journey of iterative learning, self-discovery,
					and consistent improvement. Once this 'Why'
					resonates within you, we can then chart the path
					ahead, identifying where you want to go and how to
					best get there.
					<br />
					<br />
					However, the journey of change, while rewarding,
					is rarely a straightforward one. There may be
					times when you'll need a guide, a coach to help
					navigate the rough patches. That's where I come
					in. As an Agile expert and a change management
					professional, I am equipped to support you through
					these challenges, helping you turn obstacles into
					opportunities.
					<br />
					<br />
					Together, let's harness the power of Agile and the
					science of Change Management to revolutionise your
					tomorrow... Today.
				</p>
				<div className="w-full mt-6 flex flex-row justify-center items-center">
					<Link href="/contact" className="cursor-pointer">
						<button className="flex justify-center text-center bg-tertiaryColor text-buttonText py-2 px-4 mt-6 w-28 text-xl font-semibold rounded-md hover:bg-secondaryColor hover:text-secondairyColor whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
							let's chat
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}

import Link from "next/link";
import Image from "next/image";

export default function Me() {
	return (
		<main className="h-full flex flex-col items-center max-w-custom px-6 mt-20 sm:mt-10 sm:w-full lg:h-auto lg:mt-44">
			<div className="h-auto mt-[-60px] px-8 flex flex-col items-center sm:mt-3 md:mb-20 lg:mt-10 lg:w-full">
				<h1 className="text-center text-5xl md:text-8xl md:mb-4 font-light lg:text-8xl">
					A little{" "}
					<span className="italic font-bold text-pink-900">
						about
					</span>{" "}
					my own story.
				</h1>
				<div className="bg-cover w-full h-auto mx-8 mt-10">
					<Image
						src="/lake.png"
						alt="waterlogo"
						width={500}
						height={500}
						className="w-full"
					/>
				</div>
				<p className="text-xl md:text-4xl font-extralight text-center italic lg:text-2xl py-6">
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Ducimus iusto ipsum minus sed ipsa aliquid a
					itaque necessitatibus, saepe odio corporis, fugit
					adipisci, error eligendi culpa rem quo! Tenetur,
					delectus!
				</p>
				<Link href="/contact" className="cursor-pointer">
					<button className="flex justify-center text-center border-2 border-secondairyColor border-opacity-50 text-mainColor py-2 px-4 mt-6 w-28 rounded-md hover:bg-transparent hover:text-white whitespace-nowrap hover:blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor lg:w-48 lg:mb-2">
						let's chat
					</button>
				</Link>
			</div>
		</main>
	);
}

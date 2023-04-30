export default function Home() {
	return (
		<main className="flex flex-col items-center max-w-custom px-6 mt-20 md:mt-10 md:items-start">
			<h1 className="text-center text-2xl sm:text-5xl lg:text-6xl md:text-left">
				Let me know how I can help you
			</h1>
			<p className="text-lg text-justify sm:text-xl lg:text-2xl py-6">
				Empowering Success Through Innovative Solutions.
				Unleash the potential of your team with our expert
				Agile Coaching, transformative Change Management,
				and Frontend / Fullstack Development services.
			</p>
			<button className="flex justify-center text-center border-2 border-pink-800 text-white py-2 px-4 mt-6 w-28 rounded-md hover:bg-transparent hover:text-white whitespace-nowrap hover:blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
				let's chat
			</button>
		</main>
	);
}

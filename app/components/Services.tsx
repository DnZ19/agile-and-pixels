import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-auto mt-8 sm:px-4 lg:w-full lg:px-0">
			<Image
				src={image}
				alt={name}
				width={1400}
				height={1400}
				className="rounded-md md:min-h-[200px] lg:min-h-[250px]"
				sizes="(min-width: 768px) 300px, (min-width: 1024px) 230px, (min-width: 1280px) 300px, 100vw"
			/>
			<h1 className="font-custom-font-logo text-serviceColor opacity-90 text-xl sm:text-2xl py-8 lg:text-3xl">
				{name}
			</h1>
			<p className="text-serviceColor text-justify lg:text-lg">
				{description}
			</p>
		</div>
	);
}

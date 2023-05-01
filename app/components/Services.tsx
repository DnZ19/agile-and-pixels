import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-72 mt-8 sm:w-auto sm:px-8 lg:w-full lg:px-0">
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
				className="rounded-md sm:w-full"
			/>
			<h1 className="font-custom-font-logo text-secondairyColor opacity-60 text-xl sm:text-2xl py-8 lg:text-3xl">
				{name}
			</h1>
			<p className="text-secondairyColor text-justify lg:text-lg">
				{description}
			</p>
		</div>
	);
}

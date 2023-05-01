import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-72 mt-8 md:w-auto md:px-8">
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
				className="rounded-md md:w-full"
			/>
			<h1 className="font-custom-font-logo text-secundairyColor opacity-80 text-xl md:text-2xl py-8">
				{name}
			</h1>
			<p className="text-secundairyColor text-justify">
				{description}
			</p>
		</div>
	);
}

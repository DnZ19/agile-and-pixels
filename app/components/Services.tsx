import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-72 mt-8 md:w-auto">
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
				className="rounded-md md:w-full"
			/>
			<h1>{name}</h1>
			<p>{description}</p>
		</div>
	);
}

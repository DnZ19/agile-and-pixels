import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-80 mt-8">
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
				className="rounded-md"
			/>
			<h1>{name}</h1>
			<p>{description}</p>
		</div>
	);
}

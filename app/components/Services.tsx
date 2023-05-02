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
				className="rounded-md lg:min-h-[230px] xl:min-h-[300px]"
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

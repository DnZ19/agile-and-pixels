import Image from "next/image";
import { ProductType } from "@/types/ProductType";

export default function Services({
	name,
	image,
	description,
}: ProductType) {
	return (
		<div className="w-auto mt-8 bg-slate-100 sm:px-4 lg:w-full lg:px-0 border-0.5 border-white rounded-sm md:min-h-[450px]">
			<div className="lg:max-h-[250px] overflow-hidden rounded-sm rounded-b-none">
				<Image
					src={image}
					alt={name}
					width={1400}
					height={1400}
					className="md:min-h-[200px] lg:min-h-[250px] bg-contain"
					sizes="(min-width: 768px) 300px, (min-width: 1024px) 230px, (min-width: 1280px) 300px, 100vw"
				/>
			</div>
			<div className="px-2">
				<h1 className="font-custom-font-logo text-secondairyColor text-xl sm:text-2xl py-4 lg:text-2xl">
					{name}
				</h1>
				<p className="text-neutral-950 pb-4 text-justify lg:text-lg">
					{description}
				</p>
			</div>
		</div>
	);
}

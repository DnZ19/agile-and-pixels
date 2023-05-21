import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { CookieType } from "@/types/CookieType";

export default function Cookie({ onConsent }: CookieType) {
	const [showCookieBox, setShowCookieBox] = useState(false);

	const tl = gsap.timeline({
		defaults: {
			duration: 0.1,
		},
	});

	useEffect(() => {
		tl.fromTo(
			"#cookie_box",
			{ x: -500 },
			{ x: 0, duration: 0.5, ease: "bounce" }
		);
	}, []);

	useEffect(() => {
		tl.fromTo(
			"#total_cookie",
			{ scale: 0 },
			{ scale: 1, duration: 0.2 }
		);
		tl.fromTo(
			"#total_cookie",
			{ opacity: 0, x: -50, rotate: -45 },
			{ opacity: 1, x: 0, rotate: 0, duration: 1 }
		);
	}, []);

	useEffect(() => {
		tl.fromTo(
			"#text_box",
			{
				y: -150,
				opacity: 0,
				duration: 0.8,
			},
			{ y: 0, opacity: 1, duration: 1, ease: "power2.in" }
		);
	}, []);

	useEffect(() => {
		tl.fromTo(
			"#crumbs",
			{
				y: -150,
				opacity: 0,
				duration: 1,
			},
			{ y: 0, opacity: 1, duration: 1, ease: "power2.in" }
		);
	}, []);

	const hideCookieBox = () => {
		localStorage.setItem("cookieConsent", "true");
		gsap.to("#cookie_box", {
			y: -800,
			opacity: 0,
			duration: 0.5,
			ease: "power1.out",
		});
		setTimeout(() => {
			setShowCookieBox(false);
		}, 500);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			id="cookie_box"
			className="fixed left-50% top-50% mt-[-100px] z-50 flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-600 to-slate-900 rounded-md p-10 w-auto gap-12 overflow-hidden">
			<svg
				id="total_cookie"
				className="p-2 scale-50 md:scale-90"
				width="192"
				height="192"
				viewBox="0 0 192 192"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g id="cookie-svgrepo-com 1">
					<g id="crumbs">
						<path
							id="Vector"
							d="M155.7 31.2L151.5 35.4L147.6 31.2L151.5 27.3L155.7 31.2Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_2"
							d="M172.8 52.2L171 54.3L168.9 52.2L171 50.1L172.8 52.2Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_3"
							d="M157.8 38.4L155.7 40.5L153.6 38.4L155.7 36.3L157.8 38.4Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_4"
							d="M139.2 20.1L137.1 22.2L135 20.1L137.1 18L139.2 20.1Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_5"
							d="M177 59.7L174.9 61.8L172.8 59.7L174.9 57.6L177 59.7Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_6"
							d="M178.8 52.2L176.7 54.3L174.6 52.2L176.7 50.1L178.8 52.2Z"
							fill="#DDA85F"
						/>
					</g>
					<g id="cookie">
						<path
							id="Vector_7"
							d="M110.7 68.1L118.2 12.3C111 10.5 103.8 6 96 6C88.2 6 81 10.5 73.5 12.6C66 14.4 57.6 14.1 51 18C44.4 21.9 40.2 29.4 34.8 34.8C29.4 40.2 21.9 44.4 18 51C14.1 57.6 14.4 66 12.3 73.5C10.5 81 6 88.2 6 96C6 103.8 10.5 111 12.6 118.5C14.4 126 14.1 134.4 18 141C21.9 147.6 29.4 151.8 34.8 157.2C40.2 162.6 44.1 170.1 51 174C57.6 177.9 66 177.6 73.5 179.7C81 181.5 88.2 186 96 186C103.8 186 111 181.5 118.5 179.4C126 177.3 134.4 177.6 141 173.7C147.6 169.8 151.8 162.3 157.2 156.9C162.6 151.5 170.1 147.6 174 140.7C177.9 134.1 177.6 125.7 179.7 118.2C181.5 111 186 103.8 186 96C186 88.2 179.7 71.7 179.7 71.7L110.7 68.1Z"
							fill="#DDA85F"
						/>
						<path
							id="Vector_8"
							d="M178.2 67.2C175.2 68.1 171 67.8 166.5 66C160.2 63.6 156.3 58.5 155.1 52.5C152.1 53.4 144.9 52.5 140.1 49.5C132.9 45 131.4 32.4 131.4 32.4C123.3 30 117.3 20.4 118.2 12.3C111.6 10.5 103.2 10.8 96 10.8C88.8 10.8 82.2 15 75.6 16.8C68.7 18.6 60.9 18.3 54.9 21.9C48.9 25.5 45 32.4 40.2 37.2C35.1 42.3 28.2 45.9 24.9 51.9C21.3 57.9 21.6 65.7 19.8 72.6C18 79.2 13.8 85.8 13.8 93C13.8 100.2 18 106.8 19.8 113.4C21.6 120.3 21.3 128.1 24.9 134.1C28.5 140.1 35.4 144 40.2 148.8C45.3 153.9 48.9 160.8 54.9 164.1C60.9 167.7 68.7 167.4 75.6 169.2C82.2 171 88.8 175.2 96 175.2C103.2 175.2 109.8 171 116.4 169.2C123.3 167.4 131.1 167.7 137.1 164.1C143.1 160.5 147 153.6 151.8 148.8C156.9 143.7 163.8 140.1 167.1 134.1C170.7 128.1 170.4 120.3 172.2 113.4C174 106.8 181.2 101.4 182.1 94.2C184.5 82.5 178.5 69.3 178.2 67.2Z"
							fill="#F2CB7D"
						/>
						<path
							id="Vector_9"
							d="M35.4 61.8C32.4 66.9 36.9 76.2 42.9 78.9C51.6 82.5 56.7 83.1 62.1 73.8C63.9 70.5 66.3 61.8 65.4 59.7C64.2 56.7 59.1 50.7 55.8 50.7C46.5 51 37.5 58.2 35.4 61.8Z"
							fill="#6D4934"
						/>
						<path
							id="Vector_10"
							d="M36.9 61.8C34.8 65.4 40.2 76.2 47.4 75.3C57.3 74.1 56.4 53.7 52.2 53.7C45 53.7 38.4 59.1 36.9 61.8Z"
							fill="#A37F6A"
						/>
						<path
							id="Vector_11"
							d="M135.6 117.3C139.8 116.1 142.8 108.6 141 104.1C138.3 97.2 135.6 94.2 127.8 96.3C125.1 97.2 118.8 100.5 118.2 102C117.3 104.4 116.7 110.4 118.5 112.2C123.6 117.3 132.6 118.2 135.6 117.3Z"
							fill="#6D4934"
						/>
						<path
							id="Vector_12"
							d="M131.4 110.1C134.7 109.2 139.8 99 134.4 98.4C125.1 96.9 117.9 101.4 118.8 106.5C119.7 111.6 129 110.7 131.4 110.1Z"
							fill="#A37F6A"
						/>
						<path
							id="Vector_13"
							d="M74.7 133.5C73.8 129.9 67.2 127.2 63 129C57 131.4 54.3 133.5 56.4 140.4C57 142.8 60 148.2 61.5 148.5C63.6 149.4 68.7 149.7 70.2 148.2C74.7 144 75.3 136.2 74.7 133.5Z"
							fill="#6D4934"
						/>
						<path
							id="Vector_14"
							d="M69.6 130.8C69 128.1 56.4 132 57.6 136.8C60 144.9 60 146.1 62.4 145.8C66.9 144.6 69.9 132.9 69.6 130.8Z"
							fill="#A37F6A"
						/>
						<path
							id="Vector_15"
							d="M153.3 76.5C149.7 77.4 147 84 148.8 88.2C151.2 94.2 156.9 95.1 163.2 91.8C168.6 89.1 168.9 79.5 167.4 77.7C162.9 73.2 156 75.9 153.3 76.5Z"
							fill="#6D4934"
						/>
						<path
							id="Vector_16"
							d="M151.8 79.8C150 81.9 148.5 90.3 153 89.1C161.1 86.7 166.8 78.6 163.2 77.4C158.7 75.9 153.9 77.4 151.8 79.8Z"
							fill="#A37F6A"
						/>
						<path
							id="Vector_17"
							d="M68.22 48.336L74.16 42.396L80.1 48.336L74.16 54.276L68.22 48.336Z"
							fill="#6D4934"
						/>
						<g id="Group">
							<path
								id="Vector_18"
								d="M44.118 100.449L50.055 94.509L55.995 100.446L50.058 106.386L44.118 100.449Z"
								fill="#DDA85F"
							/>
							<path
								id="Vector_19"
								d="M104.094 134.433L110.034 128.493L115.974 134.433L110.034 140.373L104.094 134.433Z"
								fill="#DDA85F"
							/>
							<path
								id="Vector_20"
								d="M96.114 117.867L104.175 109.806L112.236 117.867L104.175 125.928L96.114 117.867Z"
								fill="#DDA85F"
							/>
							<path
								id="Vector_21"
								d="M74.088 29.481L82.149 21.42L90.21 29.481L82.149 37.542L74.088 29.481Z"
								fill="#DDA85F"
							/>
						</g>
						<g id="Group_2">
							<path
								id="Vector_22"
								d="M123.366 139.041L129.306 133.101L135.246 139.041L129.306 144.981L123.366 139.041Z"
								fill="#6D4934"
							/>
							<path
								id="Vector_23"
								d="M147.228 105.645L153.168 99.705L159.108 105.645L153.168 111.585L147.228 105.645Z"
								fill="#6D4934"
							/>
							<path
								id="Vector_24"
								d="M125.436 73.911L128.406 70.941L131.376 73.911L128.406 76.881L125.436 73.911Z"
								fill="#6D4934"
							/>
							<path
								id="Vector_25"
								d="M41.178 114.798L44.148 111.828L47.118 114.798L44.148 117.768L41.178 114.798Z"
								fill="#6D4934"
							/>
						</g>
					</g>
				</g>
			</svg>
			<div
				id="text_box"
				className="flex flex-col items-center justify-center gap-4">
				<h2 className="font-custom-font-logo font-medium text-4xl text-white text-center">
					Cookie Policy
				</h2>
				<p className="text-white w-60 text-justify">
					We use analytical cookies...to make your
					experience on this website better!
				</p>
				<button
					onClick={hideCookieBox}
					className="font-custom-font-logo border-1 border-white bg-transparent text-tertiarColor py-2 px-4 rounded-md">
					Ok! Got it!
				</button>
			</div>
		</div>
	);
}

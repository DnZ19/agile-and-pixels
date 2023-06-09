"use client";

import React from "react";

export default function Bottom() {
	return (
		<div className="relative text-mainColor text-xs md:text-lg font-extralight w-full py-8">
			<div className="container mx-auto z-10 relative px-4 md:px-8 lg:px-16 flex flex-col items-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:p-8">
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">
							Agile & Pixels B.V.
						</h1>
						<p>Amersfoort</p>
						<p>Netherlands</p>
					</div>
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">Contact</h1>
						<p>info@agileandpixels.com</p>
						<a href="https://jomiro.webflow.io/">
							<p className="text-tertiarColor italic">
								inspired by: https://jomiro.webflow.io/
							</p>
						</a>
					</div>
					{/* <div className="text-center sm:text-left">
						<h1 className="font-light mb-2">
							Working Hours
						</h1>
						<p>Monday - Friday: 9am - 5pm</p>
						<p>Saturday - Sunday: Closed</p>
					</div> */}
					{/* <div className="text-center sm:text-left">
						<h1 className="font-light mb-2">Follow Us</h1>
						<p>Facebook</p>
						<p>Twitter</p>
						<p>LinkedIn</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}

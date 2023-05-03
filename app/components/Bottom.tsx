"use client";

import React from "react";

export default function Bottom() {
	return (
		<div className="relative text-secondairyColor text-xs md:text-lg font-extralight w-full py-8 mx-16">
			<div className="absolute top-0 left-0 w-full"></div>
			<div className="container mx-auto z-10 relative">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 md:px-16">
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">
							Company Name
						</h1>
						<p>1234 Example St</p>
						<p>City, State 12345</p>
						<p>Country</p>
					</div>
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">Contact</h1>
						<p>Telephone: +1 (123) 456-7890</p>
						<p>Email: info@example.com</p>
					</div>
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">
							Working Hours
						</h1>
						<p>Monday - Friday: 9am - 5pm</p>
						<p>Saturday - Sunday: Closed</p>
					</div>
					<div className="text-center sm:text-left">
						<h1 className="font-light mb-2">Follow Us</h1>
						<p>Facebook</p>
						<p>Twitter</p>
						<p>LinkedIn</p>
					</div>
				</div>
			</div>
		</div>
	);
}

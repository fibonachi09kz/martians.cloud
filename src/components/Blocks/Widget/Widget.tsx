'use client'
import Image from "next/image";
import {Button} from "@nextui-org/react";
import React from "react";
import bg from './img/bg.png';

const Widget = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-24 w-full">
			<div className="rounded-2xl p-5 sm:p-10 relative w-full bg-black text-white overflow-hidden">
				<Image className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-0" src={bg} alt="bg"/>
				<div className="absolute w-full h-full top-0 left-0 bg-black/40 z-10"></div>
				<div className="relative z-20">
					<p className="text-sm sm:text-base mb-2 font-medium">Upcoming Events</p>
					<h2 className="text-2xl sm:text-3xl mb-2 font-bold">Tech Summit: Shaping Tomorrow</h2>
					<p className="mb-5">Prepare to be part of dynamic conversations that will redefine the boundaries.</p>
					<Button
						color="default"
						variant="solid"
						size="md"
						className="text-base uppercase bg-white text-black font-medium"
					>
						Join Now
					</Button>
				</div>
			</div>
		</section>
	)
}
export default Widget;

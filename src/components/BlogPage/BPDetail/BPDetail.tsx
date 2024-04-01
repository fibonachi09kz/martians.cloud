'use client';
import Image from "next/image";
import sampleBg from './img/sample.png';
import {Button} from "@nextui-org/react";
import React from "react";


const BPDetail = () => {
	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20 relative h-[460px] lg:pt-48">
				<div className="absolute h-full w-full object-cover top-0 left-0 bg-black/60 z-10"></div>
				<Image src={sampleBg} alt="Sample bg" className="absolute h-full w-full object-cover top-0 left-0 z-0" />
				<div className="max-w-7xl mx-auto px-5 relative z-20 text-white ">
					<div className="max-w-4xl">
						<h1 className="text-4xl font-bold">Flowbite Blocks Tutorial - Learn how to get started with custom sections using the Flowbite Blocks</h1>
						<p className="mt-4 text-lg text-gray-200">Before going digital, you might scribbling down some ideas in a sketchbook.</p>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto -mt-24 relative z-30 px-5">
				<div className="rounded-xl bg-white shadow p-9 grid grid-cols-4 gap-7 h-[1000px] relative">
					<div className="col-span-3">
						<div className="flex items-center justify-between gap-4">
							<div>
								<div>By Jese Leos. August 3, 2022, 2:20am EDT</div>
							</div>
							<div>
								<Button
									color="default"
									variant="light"
									size="md"
									className="min-w-0 text-black w-10 h-10 p-0"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
									</svg>
								</Button>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<div className="p-5 sticky rounded-md bg-black h-20 top-0">
							<div className="">

							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}
export default BPDetail;

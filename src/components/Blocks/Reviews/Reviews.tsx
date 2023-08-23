'use client'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from "next/image";
const Reviews = () => {
	return (
		<div className="bg-white dark:bg-black py-12 lg:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Доверие клиентов</h2>
				</div>
			</div>
			<div className="mt-8 sm:mt-12 linear-swiper">
				<Swiper
					modules={[Autoplay]}
					spaceBetween={50}
					speed={15000}
					loop={true}
					freeMode={true}
					allowTouchMove={false}
					autoplay={{ delay: 0, disableOnInteraction: true }}
					slidesPerView="auto"
				>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
					<SwiperSlide
						className="p-5 rounded-lg border border-gray-300 dark:border-white/20 max-w-xl"
					>
						<p className="text-black text-2xl text-center mb-6 dark:text-white">“Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.”</p>
						<p className="text-black text-lg text-center mb-4 dark:text-white">Director of Engineering</p>
						<Image className="mx-auto dark:invert" src="https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg" width={100} height={30} alt="Logo" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>

	)
}

export default Reviews;

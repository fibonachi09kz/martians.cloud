'use client'
import {ImageInterface} from "@/types/Image";
import {Swiper, SwiperSlide} from "swiper/react";
import { useState} from "react";
import { Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
interface IProjectDetailSliderProps {
	images: ImageInterface[]
}
const ProjectDetailSlider = ({ images }: IProjectDetailSliderProps) => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeSlide, setActiveSlide] = useState<number>(0)


	return (
		<div>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Navigation, Thumbs]}
				onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
				className="project-gallery select-none overflow-hidden rounded-lg sm:rounded-2xl h-48 md:h-72 border shadow"
			>
				{images.map(image => (
					<SwiperSlide key={image.id}>
						<Image src={image.url} alt={image.alt} width={image.width} height={image.height} className="w-full h-full object-cover" />
					</SwiperSlide>
				))}

			</Swiper>
			<Swiper
				// @ts-ignore
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={20}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Navigation, Thumbs]}
				onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
				className="mt-5 select-none"
			>
				{images.map((image, index) => (
					<SwiperSlide
						key={image.id}
						className={`!h-12 sm:!h-20 flex-none overflow-hidden border-2 rounded-lg sm:rounded-2xl cursor-pointer transition-all ${activeSlide === index ? ' border-primary' : ' border-transparent'}`}
					>
						<Image src={image.url} alt={image.alt} width={image.width} height={image.height} className="w-full h-full object-cover" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
export default ProjectDetailSlider;







// interface INoteList {
// 	NoteComponent: FC
// }
// const NoteList = ({NoteComponent}: INoteList) => {
// 	return (
// 		<section>
// 			<NoteComponent args={"Здесь пропсы Note"} />
// 		</section>
// 	)
// }
//
// import Note from '...'
// const Page = () => {
// 	return (
// 		<NoteList NoteComponent={Note} />
// 	)
// }











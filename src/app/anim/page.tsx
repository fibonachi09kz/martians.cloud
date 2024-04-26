'use client'


import * as anim1 from "@/components/ServicesPage/Mobile/img/flexible.json";
import * as anim2 from "@/components/ServicesPage/Site/img/rauan.json";
import * as anim3 from "@/components/ServicesPage/Site/img/hoster_new.json";
import Lottie from "react-lottie";

const AnimPage = () => {
	return (
		<section className="bg-white w-full py-24 grid grid-cols-3 gap-12">
			<Lottie options={{
				loop: true,
				autoplay: true,
				animationData: anim1,
			}} isClickToPauseDisabled={false}/>
			<Lottie options={{
				loop: true,
				autoplay: true,
				animationData: anim2,
			}} isClickToPauseDisabled={false}/>
			<Lottie options={{
				loop: true,
				autoplay: true,
				animationData: anim3,
			}} isClickToPauseDisabled={false}/>
		</section>
	)
}
export default AnimPage;

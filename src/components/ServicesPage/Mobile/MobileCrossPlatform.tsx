'use client'
import {Icon} from "@iconify/react";
import Image from "next/image";
import crossImg from "@/components/ServicesPage/Mobile/img/cross.png";

const MobileCrossPlatform = () => {
	return (
		<div className="mb-12 bg-gray-100 dark:bg-zinc-900 rounded-2xl p-4 relative overflow-hidden grid lg:grid-cols-5 gap-5">
			<div className="lg:col-span-2 p-5 bg-white dark:bg-black rounded-xl">
				<h2 className="text-xl md:text-2xl mb-3 font-extrabold">Кроссплатформенная разработка</h2>
				<p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Хотите преимущество в мире мобильных приложений без перегрузки затрат? Мы - ваш идеальный партнер в этом! Наша команда специализируется на кроссплатформенной разработке на React Native, потому что это не только экономит время, но и средства наших клиентов. С React Native у вас будет единая кодовая база для обеих платформ - Android и iOS. </p>
				<div className="mt-5">
					<div className="flex items-center gap-3">
						<Icon className="w-10 h-10 md:w-12 md:h-12" icon="bi:apple" />
						<Icon className="w-10 h-10 md:w-12 md:h-12 text-[#78C257]" icon="wpf:android-os" />
					</div>
				</div>
			</div>
			<div className="lg:col-span-3 rounded-xl overflow-hidden h-[200px] lg:h-[390px]">
				<Image src={crossImg} className="w-full h-full object-cover" quality={100} width={1600} height={1200} alt="Mobile apps" />
			</div>
			<div className="lg:col-span-5 grid lg:grid-cols-3 gap-5">
				<div className="bg-white dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-bold mb-2">Экономия времени и денег</h3>
					<p className="text-sm text-center">Наш подход к кроссплатформенной разработке позволяет сэкономить как время, так и ресурсы клиента, благодаря одной кодовой базе для обеих платформ</p>
				</div>
				<div className="bg-white dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-bold mb-2">Гибкость</h3>
					<p className="text-sm text-center">Если вам нужно добавить функционал только на одну из платформ, мы с легкостью адаптируем код, чтобы соответствовать вашим потребностям, не затрагивая другую платформу</p>
				</div>
				<div className="bg-white dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-bold mb-2">Универсальность</h3>
					<p className="text-sm text-center">Независимо от того, нужно вам разработать приложение для Android, iOS или обеих платформ, мы создадим решение, которое работает плавно и безупречно на всех устройствах</p>
				</div>
			</div>
		</div>
	)
}
export default MobileCrossPlatform;

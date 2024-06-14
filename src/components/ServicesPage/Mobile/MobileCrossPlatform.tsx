'use client'
import {Icon} from "@iconify/react";

const MobileCrossPlatform = () => {
	return (
		<div className="mb-12 rounded-2xl relative overflow-hidden">
            <div className="p-6 md:p-12 bg-white dark:bg-black rounded-2xl">
                <h2 className="text-2xl md:text-3xl mb-3 font-extrabold text-center">Кроссплатформенная разработка</h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center">Один код - две платформы</p>
                <div className="mt-10">
                    <div className="flex items-center justify-center gap-3">
                        <Icon className="w-14 h-14 md:w-16 md:h-16" icon="bi:apple"/>
                        <Icon className="w-14 h-14 md:w-16 md:h-16 text-[#78C257]" icon="wpf:android-os"/>
                    </div>
                </div>
                <p className="mt-10 text-base md:text-base text-primary text-center leading-[170%]">Это значит, что в <span className="px-2 py-1 rounded-lg bg-primary dark:bg-primary/30 text-white mx-1">2 раза</span> меньше времени на разработку, чем в любом другом приложении</p>
            </div>
		</div>
	)
}
export default MobileCrossPlatform;

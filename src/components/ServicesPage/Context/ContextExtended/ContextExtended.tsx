'use client'
import {Icon} from "@iconify/react";

const ContextExtended = () => {
    return (
        <section className="mt-24 max-w-7xl mx-auto px-5">
            <h2 className="m-0 text-black text-center text-2xl font-bold leading-7 dark:text-white">Тариф «Дополнительный»*</h2>
            <p className="m-0 text-center text-gray-600 text-base font-normal leading-6 mt-2 dark:text-gray-400">Цена после оценки рабочего времени команды специалистов</p>
            <div className="mt-5 grid lg:grid-cols-3 gap-5">
                <div className="rounded-2xl bg-white dark:bg-black py-4 px-5 flex items-center gap-3">
                    <Icon icon="gg:open-collective" className="w-12 h-12 flex-none"/>
                    <p className="font-semibold text-lg leading-[140%]">Интеграция с CRM</p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-black py-4 px-5 flex items-center gap-3">
                    <Icon icon="gg:media-podcast" className="w-12 h-12 flex-none"/>
                    <p className="font-semibold text-lg leading-[140%]">Интеграция с коллтрекингом</p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-black py-4 px-5 flex items-center gap-3">
                    <Icon icon="gg:git-fork" className="w-12 h-12 flex-none"/>
                    <p className="font-semibold text-lg leading-[140%]">Интеграция с ROISTAT,<br/> сквозная аналитика</p>
                </div>
            </div>
        </section>
    )
}
export default ContextExtended;

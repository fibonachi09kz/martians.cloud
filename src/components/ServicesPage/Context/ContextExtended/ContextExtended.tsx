'use client'
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const ContextExtended = () => {
    return (
        <section className="mt-24 max-w-7xl mx-auto px-5">
            <h2 className="m-0 text-black text-center text-2xl font-bold leading-7 dark:text-white">Тариф «Дополнительный»</h2>
            <p className="m-0 text-center text-gray-600 text-base font-normal leading-6 mt-2 dark:text-gray-400">Цена после оценки рабочего времени команды специалистов</p>
            <div className="max-w-2xl mx-auto mt-5 grid lg:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white dark:bg-black py-3 px-4 flex flex-col items-center gap-1">
                    <Icon icon="gg:open-collective" className="w-8 h-8 flex-none text-green-500"/>
                    <p className="text-base leading-[140%]">Интеграция с CRM</p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-black py-3 px-4 flex flex-col items-center gap-1">
                    <Icon icon="gg:media-podcast" className="w-8 h-8 flex-none text-green-500"/>
                    <p className="text-base leading-[140%]">Интеграция с коллтрекингом</p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-black py-3 px-4 flex flex-col items-center gap-1">
                    <Icon icon="gg:edit-unmask" className="w-8 h-8 flex-none text-green-500"/>
                    <p className="text-base leading-[140%]">Интеграция с ROISTAT</p>
                </div>
                <div className="rounded-2xl bg-white dark:bg-black py-3 px-4 flex flex-col items-center gap-1">
                    <Icon icon="gg:nametag" className="w-8 h-8 flex-none text-green-500"/>
                    <p className="text-base leading-[140%]">Сквозная аналитика</p>
                </div>
            </div>
            <div className="mt-6 max-w-[300px] mx-auto">
                <Button
                    as={Link}
                    href="#flex-contact-form"
                    color="primary"
                    radius="sm"
                    className="w-full text-base font-medium"
                >
                    Заказать рекламу
                </Button>
            </div>
        </section>
    )
}
export default ContextExtended;

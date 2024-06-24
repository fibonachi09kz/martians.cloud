'use client'
import Image from "next/image";
import bg from "./media/bg.png";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ContextWidget = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-24 w-full">
            <div className="rounded-2xl p-5 sm:p-10 relative w-full bg-black text-white overflow-hidden">
                <Image className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-0" src={bg} alt="bg"/>
                <div className="absolute w-full h-full top-0 left-0 bg-black/40 z-10"></div>
                <div className="relative z-20">
                    <p className="text-sm sm:text-base mb-2 font-medium">А ещё мы можем делать...</p>
                    <h2 className="text-2xl sm:text-3xl mb-2 font-bold">Индивидуальный дизайн</h2>
                    <p className="mb-5">Создаем уникальный и запоминающийся облик вашего бренда.<br/> Это поможет вашему бизнесу выделиться на фоне конкурентов и запомниться клиентам</p>
                    <Button
                        as={Link}
                        href="/services/design"
                        color="default"
                        variant="solid"
                        size="md"
                        className="text-base bg-white text-black font-medium"
                    >
                        Заказать
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default ContextWidget;

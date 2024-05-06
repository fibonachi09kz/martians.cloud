'use client'
import {Button, Ripple, useButton} from "@nextui-org/react";
import {Card, CardFooter, CardHeader} from "@nextui-org/card";
import Link from "next/link";
import Image from "next/image";
import supportImg from './img/support.png';
import aiImg from './img/ai.jpg';
import designImg from './img/design.png';
import advImg from './img/adv.png';
import mobileImg from './img/mobile.png';
import siteImg from './img/site.png';

const HPServices = () => {

    return (
        <div className="bg-white dark:bg-black py-24">
            <div className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            Наши услуги
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                            Закрываем все потребности цифрового продукта
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 sm:mt-12 mx-auto max-w-7xl grid grid-cols-1 xs:grid-cols-2 md:grid-cols-6 gap-5">
                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Web Dev</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Разработка сайтов</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={siteImg}
                        />
                    </Card>
                </Button>
                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Mobile Dev</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Разработка мобильных приложений</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={mobileImg}
                        />
                    </Card>
                </Button>
                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <span className="absolute w-full h-32 top-0 left-0 z-10 bg-gradient-to-b from-black/70 to-transparent"></span>
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Neural Networks</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Интеграция нейросетей</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={aiImg}
                        />
                    </Card>
                </Button>

                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <span className="absolute w-full h-32 top-0 left-0 z-10 bg-gradient-to-b from-black/70 to-transparent"></span>
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">PPC Advertising</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Контекстная реклама</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={advImg}
                            unoptimized
                        />
                    </Card>
                </Button>

                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <span className="absolute w-full h-32 top-0 left-0 z-10 bg-gradient-to-b from-black/70 to-transparent"></span>
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Design</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Индивидуальный дизайн</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            unoptimized
                            quality={100}
                            src={designImg}
                        />
                    </Card>
                </Button>

                <Button
                    as={Link}
                    href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <span className="absolute w-full h-32 top-0 left-0 z-10 bg-gradient-to-b from-black/70 to-transparent"></span>
                    <Card className="h-[320px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Support</p>
                            <h4 className="text-white text-left leading-tight font-medium text-lg sm:text-2xl whitespace-break-spaces">Техническая поддержка</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={supportImg}
                        />
                    </Card>
                </Button>



            </div>
        </div>
    )
}
export default HPServices;

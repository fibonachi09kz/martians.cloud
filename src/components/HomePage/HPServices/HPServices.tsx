'use client'
import {Button, Image, Ripple, useButton} from "@nextui-org/react";
import {Card, CardFooter, CardHeader} from "@nextui-org/card";
import Link from "next/link";


const HPServices = () => {

    return (
        <div className="bg-white dark:bg-black">
            <div className="pt-12 sm:pt-16 lg:pt-20">
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
            <div className="mt-8 px-5 pb-16 sm:mt-12 mx-auto max-w-7xl sm:pb-20 lg:pb-28 grid grid-cols-2 md:grid-cols-6 gap-5">
                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Web Dev</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Разработка сайтов</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/1.png"
                        />
                    </Card>
                </Button>
                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Mobile Dev</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Разработка мобильных приложений</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/2.png"
                        />
                    </Card>
                </Button>
                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Neural Networks</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Интеграция нейросетей</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/3.jpg"
                        />
                    </Card>
                </Button>

                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">PPC Advertising</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Контекстная реклама</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/1.png"
                        />
                    </Card>
                </Button>

                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Design</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Индивидуальный дизайн</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/2.png"
                        />
                    </Card>
                </Button>

                <Button
                    // as={Link}
                    // href="/123"
                    className="p-0 m-0 h-auto rounded-2xl md:col-span-2"
                >
                    <Card className="h-[380px] sm:h-[450px] w-full">
                        <CardHeader className="absolute z-10 top-1 gap-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Support</p>
                            <h4 className="text-white text-left leading-tight font-medium text-xl sm:text-2xl whitespace-break-spaces">Поддержка сайтов</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="/images/2.png"
                        />
                    </Card>
                </Button>



            </div>
        </div>
    )
}
export default HPServices;

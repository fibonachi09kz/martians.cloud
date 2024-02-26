import {CheckCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {Button} from "@nextui-org/react";

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
            <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 grid grid-cols-3 gap-5">

            </div>
        </div>
    )
}
export default HPServices;

'use client'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import {useState} from "react";
const DesignGallery = () => {
    const [isLoading, setIsLoading] = useState(false);

    const showMoreBtnHandler = () => {
        setIsLoading(true)
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-24">
			<div className="max-w-3xl mx-auto mb-12">
				<h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Галерея работ</h2>
			</div>
			<div className="grid grid-cols-4 gap-5">
                <div className="overflow-hidden rounded-xl relative h-[200px]">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="" fill={true} />
                </div>
                 <div className="overflow-hidden rounded-xl relative h-[200px] col-span-2">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png" alt="" fill={true} />
                </div>
                 <div className="overflow-hidden rounded-xl relative h-[200px]">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="" fill={true} />
                </div>
                 <div className="overflow-hidden rounded-xl relative h-[200px] col-span-2">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png" alt="" fill={true} />
                </div>
                 <div className="overflow-hidden rounded-xl relative h-[200px]">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="" fill={true} />
                </div>
                 <div className="overflow-hidden rounded-xl relative h-[200px]">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="" fill={true} />
                </div>
			</div>
            <div className="mt-10 flex justify-center">
                <Button
                    color="primary"
                    size="md"
                    variant="ghost"
                    className="text-base font-medium"
                    isLoading={isLoading}
                    onClick={showMoreBtnHandler}
                >
                    Показать ещё
                </Button>
            </div>
		</section>
    )
}
export default DesignGallery;

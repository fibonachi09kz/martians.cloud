import Image from "next/image";
import {Button} from "@nextui-org/react";
import Link from "next/link";


type Props = {
	article: any
}

const BPMainSingle = ({ article }: Props) => {
	return (
		<Link href="" className="group flex flex-col transition-all overflow-hidden rounded-xl shadow-md active:shadow-xl hover:shadow-xl dark:bg-zinc-900">
			<div className="flex items-center justify-center p-4">
				<Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" className="w-full aspect-[715/384] rounded-md overflow-hidden" width={715} height={384} alt="Blog article preview" />
			</div>
			<div className="flex-1 flex flex-col bg-white rounded-t-xl px-4 pb-5 dark:bg-zinc-900">
				<h2 className="text-black dark:text-white mb-2 text-2xl font-semibold">Тестовая статья</h2>
				<p className="text-base text-gray-600 mb-5 dark:text-gray-400 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<div className="h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased justify-end gap-2">
					<Button
						color="default"
						size="md"
						variant="flat"
						radius="sm"
						className="text-base"
					>
						Читать далее
					</Button>
				</div>
			</div>
		</Link>
	)
}
export default BPMainSingle;

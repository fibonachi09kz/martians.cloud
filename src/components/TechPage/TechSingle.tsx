import Image from "next/image";
import {TechnologyInterface} from "@/types/Technology";
import {ImageInterface} from "@/types/Image";
import { motion } from 'framer-motion';

type Props = {
	technology: TechnologyInterface;
	onClick: (tech: TechnologyInterface) => void;
}
const TechSingle = ({ technology, onClick }: Props) => {

	const icon: ImageInterface = technology.acf.icon;

	return (
		<motion.div
			onClick={() => onClick(technology)}
			initial={{ scale: 1, opacity: 1 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}

			className="border cursor-pointer rounded-xl shadow-sm dark:border-white/20 p-4 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all select-none"
		>
			<Image className="w-14 h-14 mx-auto" src={icon.url} width={icon.sizes['large-width']} height={icon.sizes['large-height']} alt={icon.alt} />
			<p className="text-base text-black dark:text-white text-center mt-2">{technology.title.rendered}</p>
		</motion.div>
	)
}

export default TechSingle;

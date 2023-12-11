import { motion, AnimatePresence } from 'framer-motion';
import {TechnologyInterface} from "@/types/Technology";
import Image from "next/image";
import {ImageInterface} from "@/types/Image";
import {Button} from "@nextui-org/react";
import {GlobeAltIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

type Props = {
	technology: TechnologyInterface;
	onClose: () => void;
}

const TechModal = ({ technology, onClose }: Props) => {

	const icon: ImageInterface = technology.acf.icon;

	function closeModal() {
		onClose()
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<AnimatePresence>
			{technology && (
				<motion.div
					className="tech-modal-overlay px-5 backdrop-blur"
					initial={{ opacity: 0.7 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0.7 }}
					onClick={closeModal}
				>
					<motion.div
						layoutId={`${technology.id}`}
						className="py-16 px-10 bg-white border dark:bg-black dark:border-white/20 shadow-md rounded-xl relative w-full max-w-xl"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						onClick={(e) => e.stopPropagation()}
					>
						<Button
							variant="faded"
							onClick={closeModal}
							className="absolute w-10 h-7 top-3 right-3 p-0 min-w-0 rounded-md border-1"
						>
							Esc
						</Button>
						<Image className="w-20 h-20 mx-auto" src={icon.url} width={icon.sizes['large-width']} height={icon.sizes['large-height']} alt={icon.alt} />
						<p className="text-3xl text-black dark:text-white text-center mt-6">{technology.title.rendered}</p>
						<p className="text-lg text-black dark:text-white text-center mt-4">{technology.acf.descr}</p>
						{technology.acf.url && (
							<a href={technology.acf.url} className="flex flex-col sm:flex-row gap-2 items-center justify-center mt-4">
								<GlobeAltIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
								<p className="text-lg text-primary">{technology.acf.url}</p>
							</a>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TechModal;

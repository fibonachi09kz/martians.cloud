import { motion, AnimatePresence } from 'framer-motion';
import {TechnologyInterface} from "@/types/Technology";
import Image from "next/image";
import {ImageInterface} from "@/types/Image";
import {Button} from "@nextui-org/react";
import {GlobeAltIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import Link from "next/link";

type Props = {
	technology: TechnologyInterface | null;
	onClose: () => void;
}

const TechModal = ({ technology, onClose }: Props) => {

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
	}, [closeModal]);



	return (
		<AnimatePresence>
			{technology && (
				<motion.div
					className="tech-modal-overlay px-5 backdrop-blur"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.15 }}
					onClick={closeModal}
				>
					<motion.div
						className="py-16 px-10 bg-white border dark:bg-black dark:border-white/20 shadow-md rounded-xl relative w-full max-w-xl"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ duration: 0.15 }}
						onClick={(e) => e.stopPropagation()}
					>
						<Button
							variant="faded"
							onClick={closeModal}
							className="absolute w-10 h-7 top-3 right-3 p-0 min-w-0 rounded-md border-1"
						>
							Esc
						</Button>
						<Image className="w-20 h-20 mx-auto" src={technology.acf.icon.url} width={technology.acf.icon.sizes['large-width']} height={technology.acf.icon.sizes['large-height']} alt={technology.acf.icon.alt} />
						<p className="text-3xl text-black dark:text-white text-center mt-6">{technology.title.rendered}</p>
						<p className="text-lg text-black dark:text-white text-center mt-4">{technology.acf.descr}</p>
						{technology.acf.url && (
							<Link href={technology.acf.url} target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row gap-2 items-center justify-center mt-4">
								<GlobeAltIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
								<p className="text-lg text-primary">{technology.acf.url}</p>
							</Link>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TechModal;

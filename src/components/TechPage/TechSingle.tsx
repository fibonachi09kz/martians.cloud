import Image from "next/image";
import {TechnologyInterface} from "@/types/Technology";
import {ImageInterface} from "@/types/Image";

type Props = {
	technology: TechnologyInterface
}
const TechSingle = ({ technology }: Props) => {

	const icon: ImageInterface = technology.acf.icon;

	return (
		<div className="border rounded-xl shadow-sm dark:border-white/20 p-5">
			<Image className="w-16 h-16 mx-auto" src={icon.url} width={icon.sizes['large-width']} height={icon.sizes['large-height']} alt={icon.alt} />
			<p className="text-base text-black dark:text-white text-center mt-3">{technology.title.rendered}</p>
		</div>
	)
}

export default TechSingle;

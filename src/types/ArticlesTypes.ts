import {ImageInterface} from "@/types/Image";

export interface ArticleInterface {
	acf: {
		descr: string;
		backgroundpic: ImageInterface;
		mainpic: ImageInterface;
	},
	content: {
		protected: boolean;
		rendered: string;
	},
	data: string;
	date_gmt: string;
	guid: {
		rendered: string;
	},
	id: number;
	link: string;
	menu_order: number;
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	template: string;
	title: {
		rendered: string;
	},
	type: string;
}

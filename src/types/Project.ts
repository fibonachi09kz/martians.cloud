import {ImageInterface} from "@/types/Image";

export interface Project {
	acf: {
		"detail-descr": [];
		gallery: [];
		"main-img": ImageInterface;
		"small-descr": string;
		techs: [];
		url: string;
		domain: string;
		categories: [];
        bigImgDesk: ImageInterface;
        bigImgMobile: ImageInterface;
	},
	date: string;
	date_gmt: string;
	guid: {
		rendered: string;
	},
	"project-categories": [number];
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

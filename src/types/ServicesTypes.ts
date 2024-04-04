import {IconifyIcon} from "@iconify/types";
import {JSX} from "react";


export interface ServiceInterface {
	id: number;
	name: string;
	icon: () => JSX.Element;
	description: string;
	detailLink: string;
	mainColor: string;
	secondaryColor: string;
}

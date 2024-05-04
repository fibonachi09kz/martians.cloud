import {JSX} from "react";
import {Service} from "@/types/Services";


export interface ServiceInterface {
	id: number;
	name: Service;
	icon: () => JSX.Element;
	listIcon: (classes: string) => JSX.Element;
	description: string;
	detailLink: string;
	mainColor: string;
	secondaryColor: string;
}

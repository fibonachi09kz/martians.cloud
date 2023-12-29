import {ImageInterface} from "@/types/Image";

export interface TeamMemberInterface {
	id: number;
	type: string;
	title: {
		rendered: string;
	};
	acf: {
		'member-avatar': ImageInterface;
		position: string;
		'sort-position': string;
	};
}

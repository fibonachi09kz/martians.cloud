import {TaxonomyInterface} from "@/types/Taxonomy";
import {ImageInterface} from "@/types/Image";

export interface TechnologyInterface {
	id: number;
	date: string;
	date_gmt: string;
	guid: {
		rendered: string;
	};
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	template: string;
	"tech-type": number[];
	acf: {
		icon: ImageInterface;
		descr: string;
		type: TaxonomyInterface;
		url: string;
	};
	_links: {
		self: [
			{
				href: string;
			}
		];
		collection: [
			{
				href: string;
			}
		];
		about: [
			{
				href: string;
			}
		];
		"acf:term": [
			{
				embeddable: boolean;
				taxonomy: string;
				href: string;
			}
		];
		"wp:attachment": [
			{
				href: string;
			}
		];
		"wp:term": [
			{
				taxonomy: string;
				embeddable: boolean;
				href: string;
			}
		];
		curies: [
			{
				name: string;
				href: string;
				templated: boolean;
			}
		];
	};
}

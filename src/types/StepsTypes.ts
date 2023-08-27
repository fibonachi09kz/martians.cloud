export interface StepInterface {
	id: number;
	title: string;
	text: () => JSX.Element;
}
export type StepsType = StepInterface[];

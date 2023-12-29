import BriefMainInfo from "@/components/Brief/steps/BriefMainInfo";
import BriefIdeaInfo from "@/components/Brief/steps/BriefIdeaInfo";

type Props = {
	step: number;
	handleSetBriefData: (data: {}) => void;
	setNextStep: () => void;
	setPrevStep: () => void;
}
const BriefStepSwitcher = ({ step, handleSetBriefData, setNextStep, setPrevStep }: Props) => {
	switch (step) {
		case 1:
			return <BriefMainInfo currentStep={step} handleSetBriefData={handleSetBriefData} setNextStep={setNextStep} setPrevStep={setPrevStep} />
		case 2:
			return <BriefIdeaInfo currentStep={step} handleSetBriefData={handleSetBriefData} setNextStep={setNextStep} setPrevStep={setPrevStep} />
		default:
			return <div>Произошла ошибка</div>
	}
}
export default BriefStepSwitcher;

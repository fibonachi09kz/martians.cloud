'use client';

import React, { useState } from 'react'
import BriefMainInfo from "@/components/Brief/steps/BriefMainInfo";
import {Button} from "@nextui-org/react";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";
import {switchCase} from "@babel/types";
import BriefStepSwitcher from "@/components/Brief/BriefStepSwitcher";
import {AnimatePresence, motion} from "framer-motion";



const BriefForm = () => {

	const [briefData, setBriefData] = useState({});
	const [currentStep, setCurrentStep] = useState(1);
	const handleSetBriefData = (data: {}): void => {

		setBriefData((prevBriefData) => ({ ...prevBriefData, ...data }));
	};
	const setPrevStep = (): void => {
		setCurrentStep(curStep => curStep - 1)
	}
	const setNextStep = (): void => {
		setCurrentStep(curStep => curStep + 1)
	}
	console.log(briefData);

	return (
		<div className="bg-white flex-1">
			<div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="pt-12 sm:pt-16 lg:pt-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
								Заполнение брифа
							</h2>
							<p className="mt-4 text-xl text-gray-400">
								Расскажите нам о вашей идее
							</p>
						</div>
					</div>
				</div>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentStep}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<BriefStepSwitcher step={currentStep} handleSetBriefData={handleSetBriefData} setNextStep={setNextStep} setPrevStep={setPrevStep} />
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}

export default BriefForm;

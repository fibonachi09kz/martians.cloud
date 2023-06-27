import {ErrorMessage, Field} from "formik";
import React from "react";

type PropsType = {
	field: any
}
const BriefInput = ({ field }: PropsType) => {
	return (
		<div className={field.classNames}>
			<div className="flex justify-between">
				<label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label>
				{field.caption && (
					<span className="text-sm text-gray-500">{field.caption}</span>
				)}
			</div>
			<div className="mt-1">
				<Field
					type={field.type}
					id={field.name}
					name={field.name}
					className="block w-full rounded-md border-gray-300 shadow-sm focus:border-mainBlue focus:ring-mainBlue sm:text-sm"
				/>
				<ErrorMessage name={field.name} component="div" className="text-red-500 text-xs" />
			</div>
		</div>
	)
}
export default BriefInput;

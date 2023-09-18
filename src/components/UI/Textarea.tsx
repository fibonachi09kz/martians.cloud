import {FC, TextareaHTMLAttributes} from "react";
import cn from 'classnames';
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    placeholder: string;
    className?: string;
}

const Textarea: FC<TextareaProps> = ({id, name, placeholder, className, ...props}) => {
    return (
        <textarea
            {...props}
            id={id}
            name={name}
            placeholder={placeholder}
            className={cn('block w-full bg-transparent border border-gray-300 dark:border-white/20 rounded-md px-4 py-3 text-base text-gray-900 dark:text-white dark:placeholder-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none focus:outline-0 dark:focus:border-mainBlue', className)}
        />
    )
}

export default Textarea;
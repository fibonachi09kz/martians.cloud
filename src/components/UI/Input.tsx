import {FC, InputHTMLAttributes} from "react";
import cn from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    placeholder: string;
    type: string;
    className?: string;
}

const Input: FC<InputProps> = ({id, name, placeholder, type, className, ...props}) => {
    return (
        <input
            {...props}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className={cn('block w-full bg-transparent border border-gray-300 dark:border-white/20 rounded-md px-4 py-3 text-base text-gray-900 dark:text-white dark:placeholder-gray-400 focus:ring-0 focus:ring-transparent focus:outline-none focus:outline-0 dark:focus:border-mainBlue', className)}
        />
    )
}
export default Input;
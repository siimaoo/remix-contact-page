import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <label
      className={`
        flex flex-col gap-2 text-sm 
        ${error ? "text-red-500" : "text-black"}
      `}
    >
      {label}
      <input
        {...props}
        className={`
        ease-out
        duration-300
        disabled:opacity-30
        px-4
        py-1
        text-slate-900
        outline-none
        ${error ? "text-red-500" : "text-black"}
        ${error ? "focus:border-red-500" : "focus:border-blue-500"}
        ${error ? `border-red-500` : "border"}
        border
        rounded-md
        h-10
      `}
      />
      <span className="text-red-500 font-light text-xs">{error}</span>
    </label>
  );
};

export default Input;

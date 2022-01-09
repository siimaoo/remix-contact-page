import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
  return (
    <label
      className={`
        flex flex-col gap-2 text-sm 
        ${error ? "text-red-500" : "text-black"}
      `}
    >
      {label}
      <textarea
        {...props}
        className={`
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
        resize-none
      `}
      />
      <span className="text-red-500 font-light text-xs">{error}</span>
    </label>
  );
};

export default TextArea;

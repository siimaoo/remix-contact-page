import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  className,
  ...props
}) => {

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        ease-out
        duration-300
        disabled:opacity-30
        px-4
        py-1
        text-white
        shadow-sm
        rounded-md
        opacity-90
        focus:opacity-100
        hover:opacity-80
        ${className || 'bg-blue-500'}
        h-10
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;

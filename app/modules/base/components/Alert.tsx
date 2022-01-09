import React from "react";

type AlertProps = {
  title?: string;
  message?: string;
  type?: "success" | "error";
};

const Alert: React.FC<AlertProps> = ({ title, message, type }) => {
  const success =
    "text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800";
  const error =
    "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800";

  const defaultTitle = type === "error" ? "Error!" : "Success!";

  return (
    <div
      className={`
        p-4 mb-4 text-sm w-11/12 max-w-md 
        ${type === "error" ? error : success}
      `}
      role="alert"
    >
      <span className="font-medium">{title || defaultTitle} </span>
      {message}
    </div>
  );
};

export default Alert;

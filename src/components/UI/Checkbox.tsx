import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?:string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({error,className,...props}) => {
  return (
    <input
      id={props.name}
      type="checkbox"
      className={`w-4 h-4 text-blue-600 border rounded ${error ? "border-red-500" :"border-gray-300"} cursor-pointer ${className}`}
      {...props}
    />
  );
};

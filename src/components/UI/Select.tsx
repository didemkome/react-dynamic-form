import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  className?:string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ options, error,className, ...props }) => {
  return (
    <select
      id={props.name}
      autoComplete={props.name}
      {...props}
      className={`w-full border rounded px-3 py-2 text-sm ${error ? "border-red-500" : "border-gray-300"} ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

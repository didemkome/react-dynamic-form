import React from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?:string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, value,className, onChange }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="radio"
            id={option.label}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="cursor-pointer"
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "../UI/Input";

interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "password" | "checkbox";
  validation?: any;
  controlled?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
                                                      name,
                                                      label,
                                                      required,
                                                      type = "text",
                                                      validation,
                                                      controlled = false,
                                                    }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const renderField = (fieldProps: any) => {
    if (type === "checkbox") {
      return (
        <div className="flex items-center justify-start pl-32 mb-4">
          <input
            type="checkbox"
            {...fieldProps}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-700" htmlFor={label}>{label}</label>
        </div>
      );
    }

    return (
      <div className="flex items-start mb-4">
        <label className="w-32 text-right font-medium text-sm pt-2 pr-4" htmlFor={label}>
          {required && <span className="text-red-500">*</span>} {label}:
        </label>
        <div className="flex-1">
          <Input {...fieldProps} type={type} error={errors[name]?.message as string} autoComplete={
            type === "email"
              ? "email"
              : type === "password"
                ? "current-password"
                : type === "text" && name === "fullname"
                  ? "name"
                  : undefined
          }/>
        </div>
      </div>
    );
  };

  return (
    <>
      {controlled ? (
        <Controller name={name} control={control} rules={validation} render={({ field }) => renderField(field)} />
      ) : (
        renderField(register(name, validation))
      )}
    </>
  );
};
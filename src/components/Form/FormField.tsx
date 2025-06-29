import React from "react";
import {
  useFormContext,
  Controller,
  type UseFormRegisterReturn,
  type ControllerRenderProps,
  type FieldValues, type RegisterOptions,
} from "react-hook-form";

import { Input } from "../UI/Input";
import { Checkbox } from "../UI/Checkbox";
import { RadioGroup } from "../UI/RadioGroup";
import { Select } from "../UI/Select";

type FormFieldType = "text" | "email" | "password" | "checkbox" | "select" | "radio";

interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
  type?: FormFieldType;
  validation?: RegisterOptions;
  options?: { label: string; value: string }[];
  className?:string;
}

export const FormField: React.FC<FormFieldProps> = ({
                                                      name,
                                                      label,
                                                      required,
                                                      type = "text",
                                                      validation,
                                                      options = [],
                                                      className=""
                                                    }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  const isControlledType = ["checkbox", "radio", "select"].includes(type);

  const renderField = (
    fieldProps: UseFormRegisterReturn | ControllerRenderProps<FieldValues, string>
  ) => {
    const field = fieldProps as ControllerRenderProps<FieldValues, string>;

    if (type === "checkbox") {
      return (
        <div className="flex flex-col items-start mb-4 pl-32">
          <div className="flex items-center space-x-2">
            <Checkbox {...field} checked={field.value} error={errorMessage} className={className}/>
            { label && <label className="text-sm text-gray-700" htmlFor={name}>{label}</label> }
          </div>
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
      );
    }

    if (type === "radio") {
      return (
        <div className="flex items-start mb-4">
          <fieldset className="contents w-full">
            <legend className="w-32 text-right font-medium text-sm pt-2 pr-4 flex-shrink-0">
              {required && <span className="text-red-500">*</span>} {label}:
            </legend>
            <div className="flex-1">
              <RadioGroup
                name={name}
                options={options}
                value={field.value}
                onChange={field.onChange}
                className={className}
              />
              {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
            </div>
          </fieldset>
        </div>
      );
    }

    if (type === "select") {
      return (
        <div className="flex items-start mb-4">
          <label htmlFor={name} className="w-32 text-right font-medium text-sm pt-2 pr-4">
            {required && <span className="text-red-500">*</span>} {label}:
          </label>
          <div className="flex-1 w-full">
            <Select {...field} options={options} error={errorMessage} className={className}/>
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
          </div>
        </div>
      );
    }

    const uncontrolledField = fieldProps as UseFormRegisterReturn;

    return (
      <div className="flex items-start mb-4">
        <label htmlFor={type} className="w-32 text-right font-medium text-sm pt-2 pr-4">
          {required && <span className="text-red-500">*</span>} {label}:
        </label>
        <div className="flex-1">
          <Input {...uncontrolledField} type={type} error={errorMessage} className={className}/>
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
      </div>
    );
  };

  return isControlledType ? (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field }) => renderField(field)}
    />
  ) : (
    renderField(register(name, validation))
  );
};
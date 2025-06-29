import {type ReactNode, useEffect} from "react";
import {
  useForm,
  FormProvider,
  type SubmitHandler,
  type FieldValues,
  type UseFormProps,
} from "react-hook-form";

interface FormProps<TFormValues extends FieldValues> {
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
  defaultValues?: UseFormProps<TFormValues>["defaultValues"] ;
}

export function Form<TFormValues extends FieldValues>({
                                                        onSubmit,
                                                        children,
                                                        defaultValues,
                                                      }: FormProps<TFormValues>) {

  const methods = useForm<TFormValues>({
    mode: "onSubmit",
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues as TFormValues);
    }
  }, [defaultValues, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

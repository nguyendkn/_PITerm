import { useForm as useReactHookForm, SubmitHandler } from "react-hook-form";
import { message } from "antd";

interface FormValues {
  [key: string]: any;
}

export const useForm = (defaultValues: FormValues) => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useReactHookForm<FormValues>({
    defaultValues,
    mode: "onBlur", // Cách thức trigger validation
  });

  // Xử lý submit form
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Xử lý dữ liệu form ở đây
    message.success("Form submitted successfully!");
    console.log("Submitted Data:", data);
  };

  return {
    control, // Để sử dụng với component Form của Ant Design
    errors,
    handleSubmit,
    onSubmit,
    reset,
    setValue,
    getValues,
    isSubmitting,
  };
};

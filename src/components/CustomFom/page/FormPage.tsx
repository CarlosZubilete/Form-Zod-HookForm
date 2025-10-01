import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type FormValues, schema } from "../schemas/form.schema";
import { FormInput } from "../components/FormInput";
import "../styles/FormPage.css";

export const FormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur", // when the form will be validated
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <FormInput
        name="name"
        label="Name"
        control={control}
        type="text"
        error={errors.name}
      />

      <FormInput
        name="email"
        label="Email"
        control={control}
        type="email"
        error={errors.email}
      />

      <FormInput
        name="password"
        label="Password"
        control={control}
        type="password"
        error={errors.password}
      />

      <FormInput
        name="confirmPassword"
        label="Confirm Password"
        control={control}
        type="password"
        error={errors.confirmPassword}
      />

      <button type="submit">Send</button>
    </form>
  );
};

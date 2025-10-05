import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  type FormValuesRegister,
  schemaRegister,
} from "../schemas/form.schemaRegister";
import { FormInput } from "../components/FormInput";
import "../styles/FormPage.css";
import { schemaLogin, type FormValuesLogin } from "../schemas/form.schemaLogin";

type FormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const FormPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const schema = isLogin ? schemaLogin : schemaRegister;

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

  const onSubmit: SubmitHandler<FormValuesRegister | FormValuesLogin> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="form-title">
        {isLogin ? "Iniciar Sesion" : "Crear un cuenta"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {!isLogin && (
          <FormInput
            name="name"
            label="Name"
            control={control}
            type="text"
            error={errors?.name}
          />
        )}

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

        {!isLogin && (
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            control={control}
            type="password"
            error={errors?.confirmPassword}
          />
        )}

        <div>
          <button type="submit">{isLogin ? "Registrar" : "Iniciar"}</button>
        </div>

        <p>
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
          <a className="toggle" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Registrar" : "Iniciar"}
          </a>
        </p>
      </form>
    </>
  );
};

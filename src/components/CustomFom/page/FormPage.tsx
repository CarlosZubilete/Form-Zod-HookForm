import "../styles/FormPage.css";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  type FormValuesRegister,
  schemaRegister,
} from "../schemas/form.schemaRegister";
import { schemaLogin, type FormValuesLogin } from "../schemas/form.schemaLogin";
import { FormInput } from "../components/FormInput";

type FormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const FormPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const schema = isLogin ? schemaLogin : schemaRegister;
  const defaultValues: FormValues = isLogin
    ? { email: "", password: "" }
    : { name: "", email: "", password: "", confirmPassword: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur", // when the form will be validated
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValuesRegister | FormValuesLogin> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <div className="form-container animate-fade-in">
      <h2 className="form-title">
        {isLogin ? "Iniciar Sesión" : "Crear una cuenta"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <FormInput
            name="name"
            label="Nombre completo"
            control={control}
            type="text"
            error={errors?.name}
          />
        )}

        <FormInput
          name="email"
          label="Correo electrónico"
          control={control}
          type="email"
          error={errors.email}
        />

        <FormInput
          name="password"
          label="Contraseña"
          control={control}
          type="password"
          error={errors.password}
        />

        {!isLogin && (
          <FormInput
            name="confirmPassword"
            label="Confirmar contraseña"
            control={control}
            type="password"
            error={errors?.confirmPassword}
          />
        )}

        <div className="form-button-container">
          <button type="submit" className="btn-submit">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </div>
      </form>

      <div className="form-toggle-section">
        <p className="form-toggle-text">
          {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
        </p>
        <button
          type="button"
          className="toggle"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </div>
    </div>
  );
};

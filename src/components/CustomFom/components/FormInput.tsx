import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValuesRegister } from "../schemas/form.schemaRegister";
import "../styles/FormInput.css";
import type { FormValuesLogin } from "../schemas/form.schemaLogin";

interface Props {
  name: keyof (FormValuesRegister & FormValuesLogin);
  label: string;
  control: Control<FormValuesRegister | FormValuesLogin>;
  type?: string;
  error?: FieldError;
}

export const FormInput = ({ name, label, control, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "invalid" : ""}`}
          />
        )}
      />
      {error && <p className="form-error">{error.message}</p>}
    </div>
  );
};

import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValues } from "../schemas/form.schema";
import "../styles/FormInput.css";

interface Props {
  name: keyof FormValues;
  label: string;
  control: Control<FormValues>;
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

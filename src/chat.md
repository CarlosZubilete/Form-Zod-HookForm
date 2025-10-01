Hola chat, me puedes ayudar, a poner estilos a mis componentes: Algo simple, lo mas importante es que:

- Los errores, no ocupen un espacio fisico , es decir, yo usuaria algo con `::before` , para que cuando le aparesca el error, este no "desconfigure" el formulario, me entiendes ?

import "./App.css";
import { FormPage } from "./components/CustomFom/page/FormPage";
function App() {
return (
<>
<FormPage />
</>
);
}

export default App;
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

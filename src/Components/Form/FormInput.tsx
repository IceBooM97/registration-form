import { UseFormRegister, ValidationRule } from "react-hook-form";
import { IForm } from "./Form";

interface IFormInput {
  label: string;
  id: keyof IForm;
  error?: string;
  type: string;
  placeholder: string;
  pattern: ValidationRule<RegExp>;
  register: UseFormRegister<IForm>;
  minLength?: ValidationRule<number>;
}

const FormInput: React.FC<IFormInput> = ({
  label,
  id,
  error,
  type,
  placeholder,
  pattern,
  register,
  minLength
}) => {
  return (
    <div className="relative mb-10">
      <label htmlFor={id} className="mb-1 ml-1 text-left block">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
          error && "border-red-500"
        }`}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required: "Это поле является обязательным!",
          pattern,
          minLength
        })}
      />
      {error && (
        <p className="absolute top-18 left-0 text-sm text-red-800">{error}</p>
      )}
    </div>
  );
};

export default FormInput;

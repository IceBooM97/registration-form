import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export interface IForm {
  name: string;
  age: number;
  email: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const nameError = formState.errors["name"]?.message;
  const ageError = formState.errors["age"]?.message;
  const emailError = formState.errors["email"]?.message;

  const onSubmit = (data: IForm) => {
    alert(`Имя: ${data.name}\nВозраст: ${data.age}\nEmail: ${data.email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded shadow relative"
      >
        <FormInput
          label="Имя:"
          id="name"
          error={nameError}
          type="text"
          placeholder="Введите имя"
          register={register}
          pattern={{
            value: /^(?! )[a-zA-Zа-яА-Я]+(?:\s[a-zA-Zа-яА-Я]+)*$/,
            message: "Имя должно содержать только буквы!",
          }}
          minLength ={{
            value: 2,
            message: "Имя пользователя должно содержать минимум 2 символа"
          }}
        />
        <FormInput
          label="Возраст:"
          id="age"
          error={ageError}
          type="number"
          placeholder="Введите возраст"
          register={register}
          pattern={{
            value: /^\d+$/,
            message: "Возраст должен содержать только цифры",
          }}
        />
        <FormInput
          label=" Email:"
          id="email"
          error={emailError}
          type="email"
          placeholder="Введите email"
          register={register}
          pattern={{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректный email",
          }}
        />
        <button
          className="mb-10 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600"
          type="submit"
        >
          Проверить данные
        </button>
        {(nameError || ageError || emailError) && (
          <p className="text-red-800 absolute bottom-5 left-17">
            Пожалуйста, введите корректные данные.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;

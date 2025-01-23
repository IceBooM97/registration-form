import { useForm } from "react-hook-form";

interface IForm {
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
        <div className="relative mb-10">
          <label htmlFor="name" className="mb-1 ml-1 text-left block">
            Имя:
          </label>
          <input
            id="name"
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
              nameError && "border-red-500"
            }`}
            type="text"
            placeholder="Введите имя"
            {...register("name", {
              required: "Это поле является обязательным!",
              pattern: {
                value: /^[a-zA-Zа-яА-Я\s]+$/,
                message: "Имя должно содержать только буквы!",
              },
            })}
          />
          {nameError && (
            <p className="absolute top-18 left-0 text-sm text-red-800">
              {nameError}
            </p>
          )}
        </div>
        <div className="relative mb-10">
          <label htmlFor="age" className="mb-1 ml-1 text-left block">
            Возраст:
          </label>
          <input
            id="age"
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
              ageError && "border-red-500"
            }`}
            type="number"
            placeholder="Введите возраст"
            {...register("age", {
              required: "Это поле является обязательным!",
              pattern: {
                value: /^\d+$/,
                message: "Возраст должен содержать только цифры",
              },
            })}
          />
          {ageError && (
            <p className="absolute top-18 left-0 text-sm text-red-800">
              {ageError}
            </p>
          )}
        </div>
        <div className="relative mb-10">
          <label htmlFor="age" className="mb-1 ml-1 text-left block">
            Email:
          </label>
          <input
            id="email"
            className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${
              emailError && "border-red-500"
            }`}
            type="email"
            placeholder="Введите email"
            {...register("email", {
              required: "Это поле является обязательным!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный email",
              },
            })}
          />
          {emailError && (
            <p className="absolute top-18 left-0 text-sm text-sm text-red-800">
              {emailError}
            </p>
          )}
        </div>
        <button
          className="mb-10 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600"
          type="submit"
        >
          Проверить данные
        </button>
        {(nameError || ageError || emailError) && (
          <p className="text-red-800 absolute bottom-5 left-17">
            Пожалуйста, исправьте ошибки в форме.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;

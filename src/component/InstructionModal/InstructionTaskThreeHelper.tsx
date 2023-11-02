import axios from "axios";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CurrentUserContext, StepContext } from "../../App";

interface IForm {
  "Jawaban Task 2": number;
}

export default function InstructionTaskThreeHelper() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const currentUser = useContext(CurrentUserContext);

  const { nextStep } = useContext(StepContext);

  const onSubmit: SubmitHandler<IForm> = (dataResponden) => {
    const name = currentUser?.Nama;

    return axios
      .patch(
        `https://sheet.best/api/sheets/3dd03447-2ad1-492a-afb8-5b5b9388edef/Nama/${name}`,
        dataResponden
      )
      .then(() => nextStep());
  };

  const { isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-1 gap-1">
      <input
        placeholder="40"
        className="w-full rounded-md border border-gray-400 px-4 py-2"
        {...register("Jawaban Task 2", { required: true })}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 rounded-md text-sm border-2 border-blue  text-blue hover:bg-blue hover:text-white disabled:bg-white disabled:opacity-40 disabled:text-blue"
      >
        Submit
      </button>
    </form>
  );
}

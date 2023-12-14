import axios from "axios";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CurrentUserContext, StepContext, TimeContext } from "../../App";

interface IForm {
  "Jawaban Task 3": number;
}

export default function InstructionTaskThreeHelper() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: "onChange",
  });

  const currentUser = useContext(CurrentUserContext);

  const { nextStep } = useContext(StepContext);

  const { countTime } = useContext(TimeContext);

  const onSubmit: SubmitHandler<IForm> = async (dataResponden) => {
    const name = currentUser?.Nama;

    return axios
      .patch(
        `https://sheet.best/api/sheets/4e2181cc-a70c-4f45-aa09-9fdc6853cfbf/Nama/${name}`,
        dataResponden
      )
      .then(() => {
        nextStep();
      });
  };

  const { isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-1 gap-1">
      <input
        placeholder="40"
        className="w-full rounded-md border border-gray-400 px-4 py-2"
        {...register("Jawaban Task 3", { required: true })}
      />
      <button
        type="submit"
        onClick={countTime}
        disabled={isSubmitting}
        className="px-4 rounded-md text-sm border-2 border-blue  text-blue hover:bg-blue hover:text-white disabled:bg-white disabled:opacity-40 disabled:text-blue"
      >
        Submit
      </button>
    </form>
  );
}

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CurrentUserContext,
  StepContext,
  StepThreeReady,
  TimeContext,
} from "../../App";
import { callApi } from "../../utlils";

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
    const nim = currentUser?.Nim;

    if (!nim) return;

    callApi("editSpecial", [
      {
        key: "nim",
        value: nim.toString(),
      },
      {
        key: "case",
        value: "t3answer",
      },
      {
        key: "value",
        value: dataResponden["Jawaban Task 3"].toString(),
      },
    ]).then(() => {
      nextStep();
    });
  };

  const { isSubmitting } = formState;

  const { ready } = useContext(StepThreeReady);

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
        disabled={isSubmitting || !ready}
        className="px-4 rounded-md text-sm border-2 border-blue  text-blue hover:bg-blue hover:text-white disabled:bg-white disabled:opacity-40 disabled:text-blue"
      >
        Submit
      </button>
    </form>
  );
}

import { useContext } from "react";
import addcourse from "../../../../assets/addcourse.gif";
import { StepContext } from "../../../../App";

export default function KrsButtonTreatment() {
  const { step, nextStep } = useContext(StepContext);

  return (
    <button
      onClick={step === 1 ? nextStep : () => {}}
      className="ml-auto self-end flex gap-2 items-center py-2 pl-3 pr-4 border border-gray bg-[#F0F0F0] rounded-md hover:bg-[#dddddd] min-w-max"
    >
      <img src={addcourse} />
      <div className="flex flex-col text-xs">
        <span className="font-bold text-left leading-3">
          TAMBAH MATA KULIAH
        </span>
        <span className="text-left leading-4">
          Klik disini untuk menambah mata kuliah baru
        </span>
      </div>
    </button>
  );
}

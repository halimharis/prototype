import { useContext } from "react";
import { CurrentDesign } from "../../App";

export default function InstructionTaskZeroHelper() {
  const { isKontrol, toControl, toTreatment } = useContext(CurrentDesign);

  return (
    <div className="flex w-full gap-2 mb-2">
      <button
        onClick={toControl}
        className={`w-full border-2 font-bold text-blue border-blue rounded-md py-3 ${
          isKontrol && "bg-blue text-white transition-all"
        }`}
      >
        Desain Kontrol
      </button>
      <button
        onClick={toTreatment}
        className={`w-full border-2 font-bold text-blue border-blue rounded-md py-3 ${
          isKontrol === false && "bg-blue text-white transition-all"
        }`}
      >
        Desain Treatment
      </button>
    </div>
  );
}

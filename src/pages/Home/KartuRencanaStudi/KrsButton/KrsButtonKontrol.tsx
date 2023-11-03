import { useContext } from "react";
import addcourse from "../../../../assets/addcourse.gif";
import { StepContext, TimeContext } from "../../../../App";

export default function KrsButtonKontrol() {
  const { step, nextStep } = useContext(StepContext);
  const { countTime } = useContext(TimeContext);

  const onClick = () => {
    if (step === 1) {
      nextStep();
      countTime();
    }
  };

  return (
    <div className="ml-auto self-end flex gap-2 items-center py-2 pl-3 pr-4 rounded-md min-w-max cursor-default">
      <img src={addcourse} />
      <div className="flex flex-col text-xs">
        <span onClick={onClick} className="font-bold text-left leading-3">
          TAMBAH MATA KULIAH
        </span>
        <span className="text-left leading-4">
          Klik disini untuk menambah mata kuliah baru
        </span>
      </div>
    </div>
  );
}

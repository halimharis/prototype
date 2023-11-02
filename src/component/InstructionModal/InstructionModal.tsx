import { useContext, useEffect } from "react";
import { useModal } from "../../utils/modal";
import BasicModal from "../BasicModal/BasicModal";
import { StepContext } from "../../App";
import { useModalContent } from "../../utils/useModalContent";

export default function InstructionModal() {
  const { isOpen, close, open } = useModal();

  const { step } = useContext(StepContext);

  useEffect(() => {
    if (step === 2) open();
  }, [step, open]);

  const currentContent = useModalContent(close);

  if (!isOpen)
    return (
      <button
        onClick={open}
        className="fixed top-4 left-4 border-white border-2 hover:bg-white hover:text-blue hover:border-blue-dark  py-1 px-4 rounded-md text-white"
      >
        Buka Instruksi
      </button>
    );

  return (
    <BasicModal isOpen={isOpen} close={close} clickOutsideToClose>
      <div className="bg-white py-4 rounded-md px-4 flex flex-col z-10 max-w-sm min-w-[300px]">
        <h2 className="font-bold text-lg pb-3">{currentContent.title}</h2>
        {currentContent.description.map((desc, index) => (
          <p key={index} className=" first:pt-0 mb-1 last-of-type:mb-4">
            {desc}
          </p>
        ))}
        {step !== 6 && (
          <span className="text-xs mb-1 text-red-700">
            *apabila terdapat hal yang tidak dimengerti bisa ditanyakan
          </span>
        )}
        {currentContent.componentHelper && (
          <>{currentContent.componentHelper}</>
        )}
        <button
          onClick={currentContent.button?.onClick}
          className="py-3 font-bold px-3 border rounded-md bg-blue text-white hover:opacity-90"
        >
          {currentContent.button?.label}
        </button>
      </div>
    </BasicModal>
  );
}

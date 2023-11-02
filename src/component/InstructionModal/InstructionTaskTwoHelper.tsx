interface IInstructionTaskTwoHelper {
  disabled: boolean;
  onClick: () => void;
  label: string;
}

export default function InstructionTaskTwoHelper({
  disabled,
  label,
  onClick,
}: IInstructionTaskTwoHelper) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="py-3 mb-1 font-bold px-3 border-2 border-blue rounded-md text-blue hover:bg-blue hover:text-white disabled:bg-white disabled:opacity-40 disabled:text-blue"
    >
      {label}
    </button>
  );
}

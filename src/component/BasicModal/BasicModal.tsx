import React from "react";

interface IBasicModal {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
  clickOutsideToClose?: boolean;
}

export default function BasicModal({
  close,
  isOpen,
  children,
  clickOutsideToClose,
}: IBasicModal) {
  return (
    <dialog
      open={isOpen}
      className="w-full h-full open:fixed hidden bg-black bg-opacity-70 open:flex justify-center items-center"
    >
      <div
        onClick={() => clickOutsideToClose && close()}
        className="absolute z-0 top-0 left-0 w-full h-full"
      ></div>
      {children}
    </dialog>
  );
}

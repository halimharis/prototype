import { useEffect, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  return { isOpen, close, open };
};

import { useEffect, useState } from "react";

export default function useDisclosure(initialState:boolean = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    if (isOpen !== initialState) {
      setIsOpen(initialState);
    }
  }, [initialState]);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => (isOpen ? close() : open());

  return { isOpen, open, close, toggle };
}
import { useEffect } from "react";
import { useState } from "react";

export const useActiveBg = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const scrollDown = () => {
    if (window.scrollY <= 100) {
      return setIsScrollDown(false);
    }

    setIsScrollDown(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollDown);

    console.log();

    return () => {
      document.removeEventListener("scroll", scrollDown);
    };
  }, []);

  return {
    isScrollDown,
  };
};

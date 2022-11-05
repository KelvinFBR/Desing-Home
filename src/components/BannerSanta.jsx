import { useEffect, useRef } from "react";

export const BannerSanta = () => {
  const santa = useRef();

  useEffect(() => {
    const moveScroll = (event) => {
      santa.current.style = `left: ${Math.max(
        -800 + 2.5 * window.scrollY
      )}px; top:${Math.max(-200 + 0.5 * window.scrollY)}px`;
    };

    document.addEventListener("scroll", moveScroll);

    return () => {
      document.removeEventListener("scroll", moveScroll);
    };
  }, []);

  return (
    <div
      ref={santa}
      className="w-full text-5xl fixed top-[-200px] left-[-800px] max-w-3xl z-50 px-5"
    >
      <img
        className="w-full h-full object-cover rotate-12"
        src="./imgs/santa.gif"
        // className="w-full h-full object-cover"
        // src="./imgs/santa-claus.svg"
        alt="banner home "
      />
    </div>
  );
};

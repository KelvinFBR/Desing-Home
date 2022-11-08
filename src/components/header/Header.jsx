import { BannerSky } from "./BannerSky";
import { BannerSnow } from "./BannerSnow";
import { NavBar } from "./NavBar";

import { BannerHome } from "./BannerHome";
import { BannerSanta } from "./BannerSanta";
import { BannerSnowAnimation } from "./BannerSnowAnimation";
import { BannerMountainAnimation } from "./BannerMountainAnimation";

export const Header = () => {
  return (
    <>
      <header className="w-full h-screen relative mb-72">
        <NavBar />
        <div className="w-full h-full absolute flex justify-center">
          <div className="max-w-5xl relative">
            <h3 className="bott font-bold text-4xl md:text-6xl text-center text-shadow px-4 text-sky-100 sticky top-40 z-30">
              Designing your home from the North Pole for
              <span className=" text-red-400 "> Xmas</span>
            </h3>
          </div>
        </div>
        <BannerSky />

        <BannerSnow styles="w-full h-3/6 absolute bottom-0" />
        <BannerSnow styles="w-full h-3/6 absolute -bottom-[250px] z-40" />
        <BannerHome />
        <BannerSanta />
        <BannerSnowAnimation />

        <BannerMountainAnimation />
      </header>
    </>
  );
};

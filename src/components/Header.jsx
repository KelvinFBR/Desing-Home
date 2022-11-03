import { BannerMountainOne } from "./BannerMountainOne";
import { BannerMountainTwo } from "./BannerMountainTwo";
import { BannerSky } from "./BannerSky";
import { BannerSnow } from "./BannerSnow";
import { BannerTrees } from "./BannerTrees";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <>
      <header className="w-full h-screen relative">
        <NavBar />
        <BannerSky />

        <BannerSnow />
        <BannerMountainOne />
        <BannerMountainTwo />
      </header>

      <div className="w-full h-screen">
        <BannerTrees />
      </div>
    </>
  );
};

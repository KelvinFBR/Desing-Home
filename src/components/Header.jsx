import { BannerMountainOne } from "./BannerMountainOne";
import { BannerMountainTwo } from "./BannerMountainTwo";
import { BannerSky } from "./BannerSky";
import { BannerSnow } from "./BannerSnow";
import { NavBar } from "./NavBar";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BannerHome } from "./BannerHome";
import { BannerSanta } from "./BannerSanta";

export const Header = () => {
  return (
    <>
      <header className="w-full h-screen relative mb-56">
        <NavBar />
        <div className="w-full h-full absolute flex justify-center">
          <div className="max-w-5xl relative">
            <h3 className="bott font-bold text-4xl md:text-6xl text-center text-shadow text-white sticky top-40 z-30">
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

        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
          }}
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.5}
            className="w-[140%] md:w-[70%]"
            style={{
              height: "70%",
              position: "absolute",
              left: "-20%",
              bottom: "105px",
              zIndex: "0",
            }}
          >
            <BannerMountainOne />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.5}
            className="w-[140%] md:w-[70%]"
            style={{
              height: "70%",
              position: "absolute",
              left: "50%",
              bottom: "100px",
              zIndex: "",
            }}
          >
            <BannerMountainOne />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.3}
            factorY={0}
            className="w-[180%] md:w-[100%] -left-[80%] md:-left-[20%]"
            style={{
              height: "100%",
              position: "absolute",
              bottom: "-180px",
              zIndex: "10",
            }}
          >
            <BannerMountainTwo />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="w-[180%] md:w-[120%] -left-48 md:-left-[10%]"
            style={{
              height: "100%",
              position: "absolute",
              bottom: "-200px",
              zIndex: "30",
            }}
          >
            <BannerMountainOne />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </header>
    </>
  );
};

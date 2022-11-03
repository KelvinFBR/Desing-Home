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
            {/* <div className="bg-[#f1f1f1] w-full h-36 absolute left-0 bottom-0 z-20"></div> */}
            {/* <div className="bg-[#f1f1f1] w-full h-32 absolute left-0 bottom-0 z-20"></div> */}

            <h3 className="bott font-bold text-4xl md:text-6xl text-center text-shadow text-white sticky top-44 z-10">
              Designing your home from the North Pole for
              <span className=" text-red-500"> Xmas</span>
            </h3>
          </div>
        </div>
        <BannerSky />

        <BannerSnow styles="w-full h-3/6 absolute bottom-0" />
        <BannerSnow styles="w-full h-3/6 absolute -bottom-[250px] z-50" />
        <BannerHome />

        {/* <BannerSanta /> */}

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
            factorY={0}
            style={{
              width: "140%",

              height: "120%",
              //   maxHeight: "500px",
              position: "absolute",
              left: "-20%",
              bottom: "-150px",
              zIndex: "0",
            }}
          >
            <BannerMountainOne />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.3}
            factorY={0}
            // className="-left-[50%] w-[280%] lg:w-[140%] lg:-left-[20%]"
            style={{
              width: "140%",

              height: "100%",
              position: "absolute",
              left: "-20%",
              bottom: "-200px", // estable
              //   bottom: "-160px",
              zIndex: "20",
            }}
          >
            <BannerMountainTwo />
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.1}
            factorY={0}
            className="-left-36 w-[180%] lg:w-[140%] lg:-left-96"
            style={{
              //   width: "140%",

              height: "100%",
              position: "absolute",
              //   rotate: "260deg",
              //   left: "-300px",
              bottom: "-400px", // estable
              //   bottom: "-160px",
              zIndex: "20",
            }}
          >
            <BannerMountainTwo />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </header>

      {/* <div className="w-full h-screen">
        <BannerTrees />
      </div> */}
    </>
  );
};

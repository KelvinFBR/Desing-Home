import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

import { BannerMountainOne } from "./BannerMountainOne";
import { BannerMountainTwo } from "./BannerMountainTwo";

export const BannerMountainAnimation = () => {
  return (
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
  );
};

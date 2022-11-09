// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import { ImgSlideCard } from "./ImgSlideCard";

export const Card = ({ imgURLs = [], title }) => {
  return (
    <div className="w-full h-80 bg-sky-100 rounded-md shadow sm:w-72 overflow-hidden transition-all hover:scale-105">
      <div className="flex justify-center relative">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          a11y
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
        >
          {imgURLs.map((url) => (
            <SwiperSlide key={url} className="flex justify-center">
              <ImgSlideCard url={url} />
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="text-lg font-bold text-[#001c41] mb-1 absolute bottom-0 z-20 uppercase">
          {title}
        </h3>
        <span className="gradient-card absolute -bottom-2 w-full h-10 z-10"></span>
      </div>
      <p className="p-4 text-center text-[#001c41] mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab
        fuga est molestiae repellat.
      </p>
    </div>
  );
};

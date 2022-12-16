// import Swiper core and required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Card = ({ imgURLs = [], title }) => {
  return (
    <div className="w-full h-80 bg-sky-100 rounded-md shadow sm:w-72 overflow-hidden transition-all hover:scale-105">
      <div className="flex justify-center relative">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {imgURLs?.map((url, index) => (
            <SwiperSlide
              key={url}
              virtualIndex={index}
              style={{ fontSize: "0.3px", position: "relative" }}
            >
              -
              <img
                src={url}
                alt="image card"
                className="w-full h-[180px] relative -top-[0.3px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="text-lg font-bold text-[#001c41] text-shadow-title-card absolute bottom-0 z-20 uppercase">
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

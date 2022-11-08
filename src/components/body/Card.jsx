// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Card = ({ imgURLs = [], title }) => {
  return (
    <div className="w-full h-80 bg-sky-100 rounded-md shadow sm:w-72 overflow-hidden">
      <div className="flex justify-center relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        >
          {imgURLs.map((url) => (
            <SwiperSlide key={url} className="flex justify-center">
              <img
                src={url}
                alt="image card"
                className="w-full h-[180px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="text-lg font-bold text-[#001c41] mb-1 absolute bottom-0 z-20 uppercase">
          {title}
        </h3>
        <span className="gradient-card absolute bottom-0 w-full h-10 z-10"></span>
      </div>
      <p className="p-4 text-center text-[#001c41] mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab
        fuga est molestiae repellat.
      </p>
    </div>
  );
};

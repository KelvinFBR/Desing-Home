import { CardClient } from "./CardClient";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Clients = () => {
  return (
    <section id="clients" className="pt-20">
      <h2 className="text-center text-3xl font-bold text-[#001c41]">
        Our Clients
      </h2>

      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          loop
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          //   pagination={{ clickable: true }}
          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slide change")}
          className="my-20 p-20 sm:py-20 bg-[#001C41]"
        >
          <SwiperSlide className="flex justify-center">
            <CardClient
              imgURL="https://i.imgur.com/hPKPFs3.jpg"
              description="My family and me loved the Christmas decorations. we feel like I'm at the north pole."
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <CardClient
              imgURL="https://i.imgur.com/k21XtaO.jpg"
              description="I like your services, i loved your food is so delicious."
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

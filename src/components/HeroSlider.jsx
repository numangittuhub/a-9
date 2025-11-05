import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  return (
    <div className="w-full h-[80vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide
          className="bg-[url('https://i.ibb.co.com/x8gt87ks/bonsai-min.jpg')] bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black/40 text-center text-white px-6 py-10 rounded-xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
              Breathe Fresh
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Indoor Plants for Healthier Living
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-[url('https://i.ibb.co.com/0jLycYdv/Water-Hyacinth-min.jpg')] bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black/40 text-center text-white px-6 py-10 rounded-xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
              Grow Easy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Beginner-Friendly Plants
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-[url('https://i.ibb.co.com/FkH6MRhR/banyan-min.jpg')] bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black/40 text-center text-white px-6 py-10 rounded-xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
              Bring Nature Home
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Add a Touch of Green to Your Space
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

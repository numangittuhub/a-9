import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop className="h-96">
      <SwiperSlide className="bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Breathe Fresh</h1>
          <p className="mt-2 text-xl">Indoor Plants for Healthier Living</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Grow Easy</h1>
          <p className="mt-2 text-xl">Beginner-Friendly Plants</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
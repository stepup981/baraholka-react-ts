import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Button from "@components/UI/button/Button";

import { slidesMainPage } from "@helpers/sliderSlidesMain/SliderSlidesMain";

import { Slides } from "../../types/typeSlides";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "@components/sliderMain/sliderMain.scss";

const Slider = () => {
  const createSlides = (slides: Slides[]) => {
    return slides.map((slide: Slides) => (
      <SwiperSlide key={slide.id}>
        <Button>{slide.text}</Button>
        <img src={slide.img} alt={slide.text} />
      </SwiperSlide>
    ));
  };

  const slides = createSlides(slidesMainPage);

  return (
    <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination>
      {slides}
    </Swiper>
  );
};

export default Slider;

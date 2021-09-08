import Card from "../../../../components/UI/Card/Card";
import ServiceItem from "./ServiceItem/ServiceItem";

import web from "../../../../assets/icons/web.png";
import mobile from "../../../../assets/icons/mobile.png";
import desktop from "../../../../assets/icons/desktop.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { useEffect, useRef } from "react";
SwiperCore.use([Pagination, Navigation]);

const ServiceItemsContainer = (props) => {
  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  };
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    props.setClickHandler({ left: goPrev, right: goNext });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={breakpoints}
        grabCursor={true}
        pagination={{ clickable: true }}
        ref={swiperRef}
      >
        <SwiperSlide className="mySwiper">
          <ServiceItem src={web} alt="Web Apps" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceItem src={mobile} alt="Mobile Apps" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceItem src={desktop} alt="Desktop Apps" />
        </SwiperSlide>
      </Swiper>
    </Card>
  );
};
export default ServiceItemsContainer;

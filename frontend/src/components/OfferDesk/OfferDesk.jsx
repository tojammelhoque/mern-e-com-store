import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";

function OfferDesk({ slidesPerView = 3, spaceBetween = 20, slidesData }) {
  const defaultSlidesData = [
    {
      img: "images/asset16.jpeg",
      price: "$250.00",
      title: (
        <>
          S22 Samsung <br /> Smartphone
        </>
      ),
    },
    {
      img: "images/asset17.jpeg",
      price: "$150.00",
      title: (
        <>
          Armchair Mad <br /> By shopstic
        </>
      ),
    },
    {
      img: "images/asset18.jpeg",
      price: "$300.00",
      title: (
        <>
          Noise Wireless <br /> Headphones{" "}
        </>
      ),
    },
  ];

  const data = slidesData || defaultSlidesData;

  return (
    <div className="w-full container mx-auto">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <BannerBox
              img={slide.img}
              price={slide.price}
              title={slide.title}
              textDivClass="right-3"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OfferDesk;

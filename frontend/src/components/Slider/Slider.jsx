import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  const slides = [
    {
      image: "/images/asset4.png",
      alt: "Promotional image of a green T-shirt for sale",
      title: "Big Saving Days Sale",
      heading: (
        <>
          Women Solid Round <br /> Green T-Shirt
        </>
      ),
      price: "$99.99",
      link: "/shop",
    },
    {
      image: "/images/asset5.png",
      alt: "Promotional image for a featured product",
      title: "Big Saving Days Sale",
      heading: (
        <>
          Buy Modern Chair In <br /> Black Color
        </>
      ),
      price: "$99.99",
      link: "/shop",
    },
  ];
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      navigation={{
        nextEl: ".swiper-button-forward",
        prevEl: ".swiper-button-back",
      }}
      autoplay={{
        delay: 3500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      loop
      className="mySwiper relative group"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="image relative">
            <img className="rounded-md" src={slide.image} alt={slide.alt} />
          </div>
          <div className="text absolute flex flex-col gap-4 top-[25%] -right-[100%] opacity-0 transition-all duration-1000">
            <h5 className="text-2xl">{slide.title}</h5>
            <h2 className="text-4xl font-bold">{slide.heading}</h2>
            <p className="text-lg">
              Starting at only{" "}
              <span className="text-[#ff5252] text-xl">{slide.price}</span>
            </p>
            <Link to={slide.link}>
              <button className="bg-[#ff5252] text-white py-2 px-4 rounded-md font-semibold hover:bg-black transition-colors duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-back absolute z-20 top-[50%] w-[30px] h-[30px] flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:left-5 -left-80 duration-500">
        <IoIosArrowBack className="text-2xl cursor-pointer" />
      </div>
      <div className="swiper-button-forward absolute z-20 top-[50%] w-[30px] h-[30px] flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:right-5 -right-80 duration-500">
        <IoIosArrowForward className="text-2xl cursor-pointer" />
      </div>
    </Swiper>
  );
}

export default Slider;

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { slidesData } from "./SlidesData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HomeCatSlider() {
  return (
    <div className="container relative py-10">
      {/* Swiper Slider */}
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper relative group"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/category/${slide.title}`}>
              <div className="item p-5 bg-white rounded-md flex flex-col items-center">
                <div className="image-div h-32 flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-h-full object-contain hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                </div>

                <div className="text-div mt-3">
                  <h3 className="text-base font-medium text-center">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-prev absolute z-20 top-[45%] w-[30px] h-[30px]  flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:left-5 -left-80 duration-500">
          <IoIosArrowBack className="text-2xl cursor-pointer" />
        </div>
        <div className="swiper-next absolute z-20 top-[45%] w-[30px] h-[30px] flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:right-5 -right-80 duration-500">
          <IoIosArrowForward className="text-2xl cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}

export default HomeCatSlider;

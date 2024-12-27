import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
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
      loop={true}
      className="mySwiper relative group"
    >
      <SwiperSlide>
        <div className="image relative">
          <img
            className="rounded-md"
            src="/images/asset4.png"
            alt="Promotional image of a green T-shirt for sale"
          />
        </div>
        <div className="text absolute flex flex-col gap-4 top-[25%] right-[8%]">
          <h5 className="text-2xl">Big Saving Days Sale</h5>
          <h2 className="text-4xl font-bold">
            Women Solid Round <br /> Green T-Shirt
          </h2>
          <p className="text-lg">
            Starting at only{" "}
            <span className="text-[#ff5252] text-xl">$99.99</span>{" "}
          </p>
          <Link to="/shop">
            <button className="bg-[#ff5252] text-white py-2 px-4 rounded-md font-semibold hover:bg-black transition-colors duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image relative">
          <img
            className="rounded-md"
            src="/images/asset5.png"
            alt="Promotional image for a featured product"
          />
        </div>
        <div className="text absolute flex flex-col gap-4 top-[25%] right-[8%]">
          <h5 className="text-2xl">Big Saving Days Sale</h5>
          <h2 className="text-4xl font-bold">
            Buy Modern Chair In <br /> Black Color
          </h2>
          <p className="text-lg">
            Starting at only{" "}
            <span className="text-[#ff5252] text-xl">$99.99</span>{" "}
          </p>
          <Link to="/shop">
            <button className="bg-[#ff5252] text-white py-2 px-4 rounded-md font-semibold hover:bg-black transition-colors duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </SwiperSlide>
      <div className="swiper-button-back absolute z-20 top-[50%] w-[30px] h-[30px]  flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:left-5 -left-80 duration-500">
        <IoIosArrowBack className="text-2xl cursor-pointer" />
      </div>
      <div className="swiper-button-forward absolute z-20 top-[50%] w-[30px] h-[30px] flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:right-5 -right-80 duration-500">
        <IoIosArrowForward className="text-2xl cursor-pointer" />
      </div>
    </Swiper>
  );
}

export default Slider;

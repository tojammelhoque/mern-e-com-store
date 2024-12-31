import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function ProductItem({productItemData,  slidesPerView, spaceBetween }) {
  return (
    <div className="product-item-container   mt-8">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          pauseOnFocus: true,
          pauseOnTouch: true,
          pauseONMOuseHover: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-next-item",
          prevEl: ".swiper-prev-item",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper group"
      >
        {productItemData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-item border p-4">
              <img
                src={item.imgSrc}
                alt={item.productName}
                className="w-full h-auto mb-4"
              />
              <div className="text flex flex-col  gap-3">
                <p className="text-sm">{item.brandName}</p>
                <p className="text-lg font-semibold">{item.productName}</p>
                <h6>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    size="small"
                    readOnly
                  />
                </h6>
                <p className="text-sm text-[#ff5252]">${item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-prev-item absolute z-20 top-[45%] w-[30px] h-[30px]  flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:left-5 -left-80 duration-500">
          <IoIosArrowBack className="text-2xl cursor-pointer" />
        </div>
        <div className="swiper-next-item absolute z-20 top-[45%] w-[30px] h-[30px] flex items-center justify-center bg-[#ff5252] text-white rounded-md group-hover:right-5 -right-80 duration-500">
          <IoIosArrowForward className="text-2xl cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}

export default ProductItem;


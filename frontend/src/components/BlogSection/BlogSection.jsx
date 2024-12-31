import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BlogData } from "./BlogData";

function BlogSection() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper relative group py-4"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      onSwiper={(swiper) => {
        const swiperEl = swiper.el;
        swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
        swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
      }}
    >
      {BlogData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="blog-item flex flex-col gap-4">
            <img
              className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
              src={item.img}
              alt={item.alt || item.title}
            />
            <div className="flex items-center gap-2">
              <IoMdTime />
              <p>{item.date}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
            <Link  to={`/blog/${item.id}`}>
              <p className="text-base link underline cursor-pointer">
                Read More
              </p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BlogSection;

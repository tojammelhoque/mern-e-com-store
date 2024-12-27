import React from "react";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import OfferDesk from "../../components/OfferDesk/OfferDesk";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="container flex flex-col sm:flex-row items-start gap-4 sm:gap-9 pt-6">
        {/* Slider Section */}
        <div className="slider w-full sm:w-[72%]">
          <Slider />
        </div>

        {/* Side Box Section */}
        <aside className="box w-full sm:w-[35%] flex flex-col gap-4">
          {/* Box 1 */}
          <div className="box-1 relative">
            <div className="img-div">
              <img
                className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                src="/images/asset6.png"
                alt="Samsung Gear VR Camera"
                loading="lazy"
              />
            </div>
            <div className="text-div absolute flex flex-col gap-3 top-10 left-5">
              <h3 className="text-lg font-bold">
                Samsung Gear VR <br /> Camera
              </h3>
              <h3 className="text-lg font-bold text-[#ff5252]">$129</h3>
              <p className="text-base cursor-pointer underline">Shop Now</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box-2 relative">
            <div className="img-div">
              <img
                className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                src="/images/asset7.png"
                alt="Marcel Dining Room Chair"
                loading="lazy"
              />
            </div>
            <div className="text-div absolute flex flex-col gap-3 top-10 right-5">
              <h3 className="text-lg font-bold">
                Marcel Dining <br /> Room Chair
              </h3>
              <h3 className="text-lg font-bold text-[#ff5252]">$129</h3>
              <p className=" cursor-pointer text-base underline">Shop Now</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Category Slider */}
      <div className="my-8">
        <HomeCatSlider />
      </div>

      {/* Offer Section */}
      <section className="bg-white px-4 w-full py-10">
        {/* Delivery Promo */}
        <div className="container border-2 border-[#ff5252] rounded-md flex flex-wrap items-center justify-between gap-4 p-8 mb-8">
          <div className="siping flex items-center gap-4">
            <div className="icon">
              <img
                className="w-16 h-12"
                src="images/Delivery.png"
                alt="Free Delivery Icon"
              />
            </div>
            <div className="text">
              <h2 className="text-4xl font-medium">Free Delivery</h2>
            </div>
          </div>
          <div className="flex-grow border-t sm:border-t-0 sm:border-l border-gray-300 mx-4 sm:mx-0" />
          <div>
            <p className="text-[16px]">
              Free Delivery Now On Your First Order and over $200
            </p>
          </div>
          <div className="flex-grow border-t sm:border-t-0 sm:border-l border-gray-300 mx-4 sm:mx-0" />
          <div>
            <p className="text-3xl font-bold">- Only $200*</p>
          </div>
        </div>

        {/* Offer Desk */}
        <div className="mt-10">
          <OfferDesk slidesPerView={3} spaceBetween={30} />
        </div>
      </section>

      {/* Category Tabs */}
      <div className="categorytab w-full bg-white py-10">
        <div className="container flex gap-4">
          {["Fashion", "Electronics", "Furniture"].map((category, index) => (
            <h2
              key={index}
              className="text-lg font-semibold cursor-pointer hover:text-[#ff5252] transition-colors"
            >
              {category}
            </h2>
          ))}
        </div>
        <div className="mt-8"></div>
      </div>
    </>
  );
}

export default Home;

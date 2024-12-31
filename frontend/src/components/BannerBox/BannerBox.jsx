function BannerBox({ img, price, title, textDivClass = "" }) {
  return (
    <div className="relative group">
      {/* Image Container */}
      <div className="img-div relative overflow-hidden rounded-md">
        <img
          className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
          src={img}
          alt={typeof title === "string" ? title : "Banner Image"}
        />
      </div>

      {/* Text Overlay */}
      <div
        className={`text-div absolute flex flex-col gap-4 top-[12%]   opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out  ${textDivClass}`}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-lg font-bold text-[#ff5252]">{price}</p>
        <button className="px-4 py-2 bg-[#ff5252] text-white rounded-md shadow-md hover:bg-[#ff7373]">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default BannerBox;

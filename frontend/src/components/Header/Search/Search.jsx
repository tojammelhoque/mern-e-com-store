import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div
      className="w-full h-[50px] bg-[#e5e5e5]
  rounded-[5px] relative p-2"
    >
      <input
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] placeholder:text-[#7d7d7d]"
        placeholder="Search for products... "
      />
      <button className="absolute right-3 top-[54%] translate-y-[-50%]">
        <IoSearch className="text-[20px]" />
      </button>
    </div>
  );
}

export default Search;

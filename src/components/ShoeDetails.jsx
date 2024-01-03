/* eslint-disable */
import Nike1 from "../assets/n1-min.png";
import { QTY, SIZE } from "../constant";
import Select from "./Select";

function ShoeDetails() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div
          className="flex justify-center items-center h-full
        bg-gradient-to-br from-[#F636CF] via-[#E3D876] to-[#4DD4C6]"
        >
          <img src={Nike1} alt="" className="animate-float"/>
        </div>
      </div>

      {/* Shoe Details */}
      <div className="flex-1 space-y-5">
        <h1 className="text-5xl font-bold md:text-8xl ">Nike Air Max 270</h1>
        <p className="font-medium md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <div className="flex space-x-6 ">
          <p className="text-3xl font-extrabold md:text-6xl">100$</p>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZE} />
        </div>

        {/* Shoe button and link */}
        <div className="space-x-10">
          <button className="transition active:scale-75 h-14 w-44 bg-black text-white hover:bg-gray-800 active:bg-gray-500">
            Add to bag
          </button>
          <a
            href="#"
            className="font-bold text-lg underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetails;

/* eslint-disable */
import Nike1 from "../assets/n1-min.png";
import { QTY, SIZE } from "../constant";
import Select from "./Select";
import { useState } from "react";

function ShoeDetails({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, size: null });
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white lg:-mt-4">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div
          className="flex justify-center items-center h-full
        bg-gradient-to-br from-[#F636CF] via-[#E3D876] to-[#4DD4C6]"
        >
          <img src={shoe.src} alt="" className="animate-float" />
        </div>
      </div>

      {/* Shoe Details */}
      <div className="flex-1 space-y-5">
        <h1 className="text-5xl font-bold md:text-8xl ">{shoe.name}</h1>
        <p className="font-medium md:text-lg">{shoe.description}</p>
        <div className="flex space-x-6 ">
          <p className="text-3xl font-extrabold md:text-5xl">{shoe.price}$</p>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZE}
          />
        </div>

        {/* Shoe button and link */}
        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="transition active:scale-75 h-12 w-32 bg-black text-white hover:bg-gray-800 active:bg-gray-500 dark:bg-white dark:text-black dark:hover:text-white"
          >
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

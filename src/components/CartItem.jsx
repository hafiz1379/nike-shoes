/* eslint-disable */
import Select from "./Select";
import { CiTrash } from "react-icons/ci";
import { SIZE, QTY } from "../constant";

function CardItem({ item: { product, qty, size } }) {
  return (
    <div className="hover:bg-[#DAFFA2] cursor-pointer bg-gray-50 space-y-2">
      <div className="p-2 flex space-x-2">
        <img className="h-24" src={product.src} alt="" />
        <div className="space-y-2">
          <div className="font-bold ">{product.name}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold">{product.price}</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select defaultValue={size} title="" options={SIZE} className={"w-16 p-1 pl-2"} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select defaultValue={qty} title="" options={QTY} className={"w-16 p-1 pl-2"} />
          </div>
        </div>
        <button>
          <CiTrash />
        </button>
      </div>
    </div>
  );
}

export default CardItem;

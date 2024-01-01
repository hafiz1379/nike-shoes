/* eslint-disable */
import Select from './Select';
import { CiTrash } from 'react-icons/ci';
import { SIZE, QTY } from '../constant';

function CardItem({ item }) {
  return (
    <div className="hover:bg-[#DAFFA2] cursor-pointer bg-gray-50 space-y-2">

    <div className="p-2 flex space-x-2">
      <img className="h-24" src={item.src} alt="" />
      <div className="space-y-2">
      <div className="font-bold ">{item.name}</div>
      <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">{item.price}</div>
    </div>
    <div className='flex justify-between pl-32'>
      <div className='flex'>
      <div>
        <div className='font-bold'>SIZE</div>
        <Select title="" options={ SIZE }/>
      </div>
      <div>
        <div className='font-bold'>QTY</div>
        <Select title="" options={QTY} />
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

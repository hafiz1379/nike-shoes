/* eslint-disable */

function CardItem({ item }) {
  return (
    <div className="p-2 hover:bg-[#DAFFA2] cursor-pointer bg-gray-50 flex space-x-2">
      <img className="h-24" src={item.src} alt="" />
      <div className="space-y-2">
      <div className="font-bold ">{item.name}</div>
      <div className="text-sm text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">{item.price}</div>
    </div>
  );
}

export default CardItem;

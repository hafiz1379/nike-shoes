/* eslint-disable */

function Card({ item }) {
  return (
    <div className={`${item.className} transition transform hover:scale-105 max-w-xl`}>
      <div className="p-8">
        <div className="text-2xl font-bold">{item.name}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">SHOP NOW +</div>
      </div>
      <img className="absolute left-[40%] top-5 w-56 h-40" src={item.srs} alt="" />
    </div>
  );
}

export default Card;

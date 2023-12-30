/* eslint-disable */
import Nike1 from '../assets/n1-min.png';

function ShoeDetails() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">

        {/* Shoe Image */}
      <div className="flex-1 ">
        <div className='bg-gradient-to-br from-[#F636CF] via-[#E3D876] to-[#4DD4C6]'>
        <img src={Nike1} alt="" />
        </div>
      </div>

      {/* Shoe Details */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-bold md:text-9xl ">Nike Air Max 270</h1>
        <p className="font-medium md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod vel asperiores quo culpa ad recusandae quaerat nihil facere.</p>
        <p className="text-3xl font-extrabold md:text-6xl">
            100$
        </p>

        {/* Shoe button and link */}
        <div className="space-x-10">
        <button className="h-14 w-44 bg-black text-white hover:bg-gray-800 active:bg-gray-500">Add to bag</button>
        <a href="#" className="font-bold text-lg underline underline-offset-4">
            View Details
        </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetails;

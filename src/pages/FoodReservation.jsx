import React, { useState } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { MdFastfood } from "react-icons/md";
import { LuSoup } from "react-icons/lu";

const FoodReservation = () => {
  const [activeDay, setActiveDay] = useState(1);
  return (
    <section className='p-10'>
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        رزرو غذا
      </h2>
      <div className='w-3/5 flex-col mx-auto flex'>
        <div className='flex w-full justify-between  m-auto my-10 items-center'>
          <button
            onClick={() => setActiveDay(1)}
            className={`${activeDay == 1 && "!bg-indigo-500"} ${
              activeDay == 1 && "!text-white"
            } bg-indigo-100  hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300   px-5 py-2 rounded-full text-indigo-800`}
          >
            شنبه
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`${activeDay == 2 && "!bg-indigo-500"} ${
              activeDay == 2 && "!text-white"
            } bg-indigo-100  hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300 px-5 py-2 rounded-full text-indigo-800`}
          >
            یکشنبه
          </button>
          <button
            onClick={() => setActiveDay(3)}
            className={`${activeDay == 3 && "!bg-indigo-500"} ${
              activeDay == 3 && "!text-white"
            } bg-indigo-100 hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300 px-5 py-2 rounded-full text-indigo-800`}
          >
            دوشنبه
          </button>
          <button
            onClick={() => setActiveDay(4)}
            className={`${activeDay == 4 && "!bg-indigo-500"} ${
              activeDay == 4 && "!text-white"
            } bg-indigo-100 hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300 px-5 py-2 rounded-full text-indigo-800`}
          >
            سه شنبه
          </button>
          <button
            onClick={() => setActiveDay(5)}
            className={`${activeDay == 5 && "!bg-indigo-500"} ${
              activeDay == 5 && "!text-white"
            } bg-indigo-100 hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300 px-5 py-2 rounded-full text-indigo-800`}
          >
            چهارشنبه
          </button>
          <button
            onClick={() => setActiveDay(6)}
            className={`${activeDay == 6 && "!bg-indigo-500"} ${
              activeDay == 6 && "!text-white"
            } bg-indigo-100 hover:bg-indigo-500 hover:text-white duration-300 ring-4 ring-indigo-300 px-5 py-2 rounded-full text-indigo-800`}
          >
            پنجشنبه
          </button>
        </div>
        <div className='full flex  justify-between my-5'>
          <div className='w-[32%] relative flex flex-col items-center rounded-lg border-2 border-gray-100 shadow-sm h-96'>
            <span className='absolute -right-3 top-2 rounded-sm rotate-45 text-white bg-indigo-500  px-5'>
              ناهار
            </span>
            <div className='h-3/5 w-full rounded-t-lg flex justify-between items-center bg-indigo-100 border-b border-gray-200'>
              <MdFastfood className='font-bold m-auto text-[100px]' />
            </div>
            <div className='flex w-full justify-between items-center px-4'>
              <h2 className='p-4'>چلوگوشت</h2>
              <span className='text-xs'>15000 تومان</span>
            </div>
            <button className='text-red-500 hover:text-orange-500 text-xs my-3'>
              جزییات بیشتر
            </button>

            <button className='bg-green-500 hover:bg-green-400 flex items-center px-5 rounded-md text-white py-2'>
              رزرو
              <HiMiniPlus className='font-bold text-white mt-1 mx-1' />
            </button>
          </div>
          <div className='w-[32%] relative flex flex-col items-center rounded-lg border-2 border-gray-100 shadow-sm h-96'>
            <span className='absolute -right-3 top-2 rounded-sm rotate-45 text-white bg-indigo-500  px-5'>
              ناهار 2
            </span>
            <div className='h-3/5 w-full rounded-t-lg flex justify-between items-center bg-indigo-100 border-b border-gray-200'>
              <MdFastfood className='font-bold m-auto text-[100px]' />
            </div>
            <div className='flex w-full justify-between items-center px-4'>
              <h2 className='p-4'>چلوخورشت قورمه سبزی</h2>
              <span className='text-xs'>15000 تومان</span>
            </div>
            <button className='text-red-500 hover:text-orange-500 text-xs my-3'>
              جزییات بیشتر
            </button>

            <button className='bg-green-500 hover:bg-green-400 flex items-center px-5 rounded-md text-white py-2'>
              رزرو
              <HiMiniPlus className='font-bold text-white mt-1 mx-1' />
            </button>
          </div>
          <div className='w-[32%] relative flex flex-col items-center rounded-lg border-2 border-gray-100 shadow-sm h-96'>
            <span className='absolute -right-3 top-2 rounded-sm rotate-45 text-white bg-orange-500  px-5'>
              شام
            </span>
            <div className='h-3/5 w-full rounded-t-lg flex justify-between items-center bg-orange-100 border-b border-gray-200'>
              <LuSoup className='font-bold m-auto text-[100px]' />
            </div>
            <div className='flex w-full justify-between items-center px-4'>
              <h2 className='p-4'>خوارک لوبیا با قارچ</h2>
              <span className='text-xs'>12000 تومان</span>
            </div>
            <button className='text-red-500 hover:text-orange-500 text-xs my-3'>
              جزییات بیشتر
            </button>
            <button className='bg-green-500 hover:bg-green-400 flex items-center px-5 rounded-md text-white py-2'>
              رزرو
              <HiMiniPlus className='font-bold text-white mt-1 mx-1' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodReservation;

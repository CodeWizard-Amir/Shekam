import React, { useState } from "react";
import Ads from "../components/Ads";

const Group = () => {
  const [numberOfGroup, setnNmberOfGroup] = useState([1]);
  const setGroupField = () => {
    if (numberOfGroup.length < 4) setnNmberOfGroup((num) => [...num, 1]);
  };
  console.log(numberOfGroup);
  return (
    <section className='p-10'>
      <Ads right={"right-[75%]"} top={"top-[40%]"} />
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        هم گروهی
      </h2>
      <div className='w-1/2 p-5'>
        <p className='border-r-4 w-fit pl-10 border-yellow-500 text-yellow-600 my-3 p-3 '>
          حداکثر 4 همگروهی میتوانید داشته باشید
        </p>
        <p className='border-r-4 w-fit pl-10 border-yellow-500 text-yellow-600  my-3 p-3 '>
          درخواست شما برای افراد ارسال و بعد از تایید انها به گروه اضافه خواهند
          شد
        </p>
        <p className='border-r-4 w-fit pl-10 border-yellow-500 text-yellow-600 my-3 p-3 '>
          تنها کارت لیدر وکارت هایی که تعیین میکند میتواند بقیه غذا هارا دریافت
          کند
        </p>
      </div>
      <div className='my-5 w-1/3'>
        <form action='' className='flex space-y-3 flex-col'>
          {numberOfGroup.map(() => (
            <div className='flex flex-col border-b-2 border-gray-200 p-5 space-y-3'>
              <input
                type='text'
                placeholder='نام دانشجو'
                className='py-3 px-5 rounded-md shadow-sm border border-gray-200'
              />
              <input
                type='text'
                placeholder='شماره دانشجویی'
                className='py-3 px-5 rounded-md shadow-sm border border-gray-200'
              />
            </div>
          ))}
          {numberOfGroup.length >= 4 && (
            <p className='text-red-500 text-sm mx-5'>به حداکثر تعداد رسیدید</p>
          )}
          <div className='flex space-x-reverse space-x-5'>
            <button
              type='button'
              onClick={() => setGroupField()}
              className={`${
                numberOfGroup.length >= 4 && `opacity-30`
              } bg-gray-200 w-fit rounded-lg px-5 py-3 hover:bg-gray-300 duration-500`}
            >
              اضافه کردن
            </button>
            <button className='border-2 border-indigo-500 px-5 py-2 rounded-lg text-indigo-500 hover:bg-indigo-500 hover:text-white duration-500'>
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Group;

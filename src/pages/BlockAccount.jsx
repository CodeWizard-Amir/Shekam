import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";

const BlockAccount = () => {

  return (
    <section className='p-10'>
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        اطلاعات حساب کاربری
      </h2>
      <div className='my-10 space-y-10 p-10 w-[380px]'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center'>
          <PiStudentBold className="mx-1" />
            <p>نام و نام خانوادگی : </p>
          </div>
          <strong>امیرسجاد نوری</strong>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center'>
          <FaCode className="mx-1" />
            <p>شماره دانشجویی : </p>
          </div>
          <strong>40112507042</strong>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center'>
          <FaUniversity className="mx-1" />
            <p>دانشگاه : </p>
          </div>
          <strong>بوعلی سینا</strong>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center'>
          <GiArchiveRegister className="mx-1" />
            <p>عنوان ثبت نامی : </p>
          </div>
          <strong>دوره روزانه</strong>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center'>
          <BiCoinStack className="mx-1" />
            <p>اعتبار حساب : </p>
          </div>
          <strong>250000 تومان</strong>
        </div>
        <div className='flex justify-between items-center w-full'>
          <button className="ring-2 ring-red-400 hover:ring-red-300 hover:bg-red-500 hover:text-white duration-500 w-full py-3 rounded-sm text-red-500">قفل کردن کارت</button>
        </div>
      </div>
    </section>
  );
};

export default BlockAccount;

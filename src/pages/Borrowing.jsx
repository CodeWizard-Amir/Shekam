import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import Ads from "../components/Ads";

const Borrowing = () => {
  return (
    <section className='p-10 w-full absolute'>
          <Ads right={"right-[60%]"} top={"top-[10%]"} />


      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        قرض از سامانه
      </h2>
      <div className='my-10 p-10'>
        <form className='flex flex-col space-y-5' action=''>
          <div className='flex w-[600px] justify-between'>
            <div className='flex items-center m-2'>
              <PiStudentBold className='text-xl' />
              <p className='mx-2'>شماره دانشجویی ضامن را وراد کنید</p>
            </div>
            <input className='border rounded-md w-80 py-3 px-10' type='text' />
          </div>
          <div className='flex w-[600px] justify-between'>
            <div className='flex items-center m-2'>
              <FaRegMoneyBill1 className='text-xl' />
              <p className='mx-2'>مبلغ مورد نظر را وارد کنید</p>
            </div>
            <input className='border rounded-md w-80 py-3 px-10' type='text' />
          </div>
          <button className='w-[600px] hover:bg-indigo-700 ring-2 text-indigo-700 rounded-sm duration-500 py-3 hover:text-white ring-indigo-700'>
            درخواست
          </button>
        </form>
      </div>
    </section>
  );
};

export default Borrowing;

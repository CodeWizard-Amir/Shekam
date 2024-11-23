import React from "react";
import Ads from "../components/Ads";

const PasswordChange = () => {
  return (
    <section className='p-10 w-full relative'>
    <Ads right={"right-[70%]"} top={"top-[10%]"} />

      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        تعغیر رمز عبور
      </h2>
      <div className="my-5 w-1/3">
        <form action="" className="flex space-y-5 flex-col">
          <input type="text" placeholder="رمز عبور فعلی" className="py-3 px-5 rounded-md shadow-sm border border-gray-200" />
          <input type="text" placeholder="رمز عبور جدید" className="py-3 px-5 rounded-md shadow-sm border border-gray-200" />
          <input type="text" placeholder="تکرار عبور جدید"  className="py-3 px-5 rounded-md shadow-sm border border-gray-200"/>
          <button className="border-2 border-indigo-500 px-5 py-3 rounded-md text-indigo-800 hover:bg-indigo-500 hover:text-white duration-500">ذخیره</button>
        </form>
      </div>
    </section>
  );
};

export default PasswordChange;

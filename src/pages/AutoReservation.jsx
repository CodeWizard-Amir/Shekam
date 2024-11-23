import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { VscSymbolKeyword } from "react-icons/vsc";
import { PiBreadDuotone } from "react-icons/pi";
import { MdOutlineLunchDining } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import Ads from "../components/Ads";

const AutoReservation = () => {
  const [allReserved, setAllReserved] = useState(false);

  const animatedComponents = makeAnimated();
  const daysOtion = [
    { value: "شنبه", label: "شنبه" },
    { value: "یکشنبه", label: "یکشنبه" },
    { value: "دوشنبه", label: "دوشنبه" },
    { value: "سه شنبه", label: " سه شنبه" },
    { value: "چهارشنبه", label: "چهارشنبه" },
    { value: "پنجشنبه", label: "پنجشنبه" },
  ];
  const foodOption = [
    { value: "کباب", label: "کباب" },
    { value: "جوجه کباب", label: "جوجه کباب" },
    { value: "چلوگوشت", label: "چلوگوشت" },
    { value: "ماهی", label: "ماهی" },
    { value: "قورمه سبزی", label: "قوزمه سبزی" },
    { value: "قیمه", label: "قیمه" },
  ];
  const foodAndDaysOption = [
    { value: "شنبه | ناهار", label: "شنبه | ناهار" },
    { value: "شنبه | شام", label: "شنبه | شام" },
    { value: "یکشنبه | ناهار", label: "یکشنبه | ناهار" },
    { value: "یکشنبه | شام", label: "یکشنبه | شام" },
    { value: "دوشنبه | ناهار", label: "دوشنبه | ناهار" },
    { value: "دوشنبه | شام", label: "دوشنبه | شام" },
    { value: "سه شنبه | ناهار", label: "سه شنبه | ناهار" },
    { value: "سه شنبه | شام", label: "سه شنبه | شام" },
    { value: "چهارشنبه | ناهار", label: "چهارشنبه | ناهار" },
    { value: "چهارشنبه | شام", label: "چهارشنبه | شام" },
    { value: "پنجشنبه | ناهار", label: "پنجشنبه | ناهار" },
    { value: "پنجشنبه | شام", label: "پنجشنبه | شام" },
  ];
  return (
    <section className='p-10 w-full relative'>
    <Ads right={"right-[70%]"} top={"top-[10%]"} />
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        رزرو خودکار
      </h2>
      <form className='flex my-10 flex-col space-y-5' action=''>
        <div className='flex w-[700px] justify-between'>
          <div className='flex items-center m-2'>
            <LiaCalendarWeekSolid className='text-xl' />
            <p className='mx-2'>روز های هفته را انتخاب کنید</p>
          </div>
          <Select
            placeholder={"انتخاب کنید ..."}
            isDisabled={allReserved}
            className='border rounded-md w-[450px] bg-white'
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={daysOtion}
          />
        </div>
        <div className='flex w-[700px] justify-between'>
          <div className='flex items-center m-2'>
            <VscSymbolKeyword className='text-xl' />
            <p className='mx-2'>کلمات کلیدی غذاهای مورد نظر</p>
          </div>
          <CreatableSelect
            placeholder={"انتخاب کنید ..."}
            isDisabled={allReserved}
            className='border rounded-md w-[450px] bg-white'
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={foodOption}
          />
        </div>
        <div className='flex w-[700px] justify-between'>
          <div className='flex items-center m-2'>
            <PiBreadDuotone className='text-xl' />
            <p className='mx-2'>رزرو خودکار صبحانه</p>
          </div>

          <input
            disabled={allReserved}
            type='checkbox'
            name=''
            className='w-5'
            id=''
          />
        </div>
        <div className='flex w-[700px] justify-between'>
          <div className='flex items-center m-2'>
            <MdOutlineLunchDining className='text-xl' />
            <p className='mx-2'>انتخاب وعده با روز</p>
          </div>
          <Select
            isDisabled={allReserved}
            placeholder={"انتخاب کنید ..."}
            className='border rounded-md w-[450px] bg-white'
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={foodAndDaysOption}
          />
        </div>
        <div className='flex w-[700px] justify-between'>
          <div className='flex items-center m-2'>
            <FaCheckDouble className='text-xl' />
            <p className='mx-2'>رزرو خودکار تمامی وعده ها</p>
          </div>
          <input
            onChange={(e) => setAllReserved((val) => !val)}
            type='checkbox'
            name=''
            className='w-5'
            id=''
          />
        </div>
        <button className='w-[700px] hover:bg-indigo-700 ring-2 text-indigo-700 rounded-sm duration-500 py-3 hover:text-white ring-indigo-700'>
          درخواست
        </button>
      </form>
    </section>
  );
};

export default AutoReservation;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { LuCalendarCheck } from "react-icons/lu";
import { ImKey2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { TbReservedLine } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { TbLockX } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdAutoMode } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import LOGO from "../assets/img/Logo.webp";
import NOURI from "../assets/img/nouri.jpg";
import { Link, Outlet } from "react-router-dom";
import HideMenu from "../components/HideMenu";
import { FaPoll } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";

const MainLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main className='flex justify-between w-full h-[100vh] overflow-hidden'>
      <section className='w-[16%] border-l-2 border-indigo-900 h-full'>
        <div className='w-full px-5 h-40 relative rounded-b-[60%] !dark:bg-purple-500 bg-indigo-900 justify-center text-white p-2 flex items-center'>
          <img
            className='w-28 h-28 top-[60%] right-[31%] bg-indigo-900 border-[10px] p-1 border-white  absolute rounded-full'
            src={LOGO}
            alt=''
          />
          <h2 className='font-bold mx-4 text-xl absolute top-10'>سامانه شکم</h2>
        </div>
        <ul className='w-full space-y-4 hover:[&_>a]:border-purple-500 hover:[&_>a]:duration-500 p-3 mt-14'>
          <Link
            to={"/reserve"}
            className='flex bg-gray-100 !border-r-4 border-r-purple-500 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-purple-800 border-gray-200 p-2 rounded-full'>
              <GiForkKnifeSpoon className='text-white' />
            </p>
            <p className='mx-2 font-bold'>رزرو غذا</p>
          </Link>
          <Link
            to={"/auto-reserve"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-blue-800 border-gray-200 p-2 rounded-full'>
              <MdAutoMode className='text-white' />
            </p>
            <p className='mx-2 font-bold'>رزرو خودکار</p>
            <span className='bg-red-500 animate-pulse rounded-full p-1 text-white mr-24 text-xs'>
              جدید
            </span>
          </Link>
          <Link
            to={"/borrowing"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-red-500 border-gray-200 p-2 rounded-full'>
              <FaDollarSign className='text-white' />
            </p>
            <p className='mx-2 font-bold'>قرض از سامانه</p>
            <span className='bg-red-500 rounded-full p-1 text-white mr-20 animate-pulse text-xs'>
              جدید
            </span>
          </Link>
          <Link
            to={"/daily-sale"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-green-600 border-gray-200 p-2 rounded-full'>
              <LuCalendarCheck className='text-white' />
            </p>
            <p className='mx-2 font-bold'>روز فروش</p>
          </Link>
          <Link
            to={"/password-change"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-yellow-600 border-gray-200 p-2 rounded-full'>
              <ImKey2 className='text-white' />
            </p>
            <p className='mx-2 font-bold'>تعغیر رمز دوم</p>
          </Link>
          <Link
            to={"/Group"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-sky-600 border-gray-200 p-2 rounded-full'>
              <FaUsers className='text-white' />
            </p>{" "}
            <p className='mx-2 font-bold'>هم گروهی</p>
          </Link>
          <Link
            to={"/reservation-status"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-cyan-800 border-gray-200 p-2 rounded-full'>
              <TbReservedLine className='text-white' />
            </p>{" "}
            <p className='mx-2 font-bold'>وضعیت رزروها</p>
          </Link>
          <Link
            to={"/performance-report"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-orange-700 border-gray-200 p-2 rounded-full'>
              <TbReportSearch className='text-white' />
            </p>{" "}
            <p className='mx-2 font-bold'> گزارش عملکرد</p>
          </Link>
          <Link
            to={"/blockAccount"}
            className='flex bg-gray-100 p-1 rounded-md border-gray-200 border items-center'
          >
            <p className=' text-2xl border-2 bg-gray-950 border-gray-200 p-2 rounded-full'>
              <TbLockX className='text-white' />
            </p>{" "}
            <p className='mx-2 font-bold'>قفل کارت</p>
          </Link>
        </ul>
      </section>
      <section id="MainLayOut" className='w-[84%] overflow-scroll bg-gray-50'>
        <nav className='w-full sticky top-0 flex justify-between items-center p-3 px-10 bg-white shadow-md border-b border-gray-100'>
          <div className='flex hover:text-indigo-700 duration-500 justify-center w-fit items-center'>
            <img  className='w-12 h-12 rounded-full' src={NOURI} alt='' />
            <Link className='font-bold mr-2 mt-[5px] text-sm'>امیرسجاد نوری</Link>
            <IoMdArrowDropdown className="text-xl mt-[7px]" />
          </div>
          <div className='flex w-fit'>
            <p className='mx-10 text-sm font-bold'>
              اعتبار حساب
              <b className='text-xs !font-normal mx-2'>(120000 تومان)</b>
            </p>
            <button title='دارک مود' className='mx-2 text-xl text-yellow-400'>
              {true ? <FaMoon /> : <IoMdSunny />}
            </button>
            <button
              title='رای دادن به غذا'
              className='mx-2 text-xl text-orange-400'
            >
              <IoStar />
            </button>
            <button title='تغغیر زبان' className='mx-2 text-purple-900 text-xl'>
              <GrLanguage />
            </button>
            <button title='نظرسنجی' className='mx-2 text-red-700 text-xl'>
              <FaPoll />
            </button>
            <button className='mx-2 text-xl text-sky-700'>
              <FaBell />
            </button>
            <button
              onClick={() => setShowMenu(true)}
              className='mx-2 text-xl text-gray-500'
            >
              <FaBars className='' />
            </button>
          </div>
        </nav>
        {false && (
          <div className='w-full bg-red-400 text-red-800 flex justify-center items-center py-4'>
            کارت غیر فعال است !
          </div>
        )}
        <p className='p-5'>امروز سه شنبه 24/8/1402</p>
        {showMenu && <HideMenu setShowMenu={setShowMenu} />}
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;

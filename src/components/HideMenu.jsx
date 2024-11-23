import React from "react";
import { IoClose } from "react-icons/io5";
import NOURI from "../assets/img/nouri.jpg";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCashCoin } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";

const HideMenu = ({ setShowMenu }) => {
  return (
    <section
      id='HideMenu'
      className='h-full  !z-10 absolute top-0 left-0  w-[18%] shadow-lg border border-gray-100 bg-white'
    >
      <div className='flex border-b-2 shadow-lg border-indigo-700 justify-between items-center px-3 p-3'>
        <div className='flex justify-center w-fit items-center'>
          <img className='w-12 h-12 rounded-full' src={NOURI} alt='' />
          <h3 className='font-bold mx-3 mt-3 text-sm'>امیرسجاد نوری</h3>
        </div>
        <button
          onClick={() => setShowMenu(false)}
          className='text-2xl hover:text-red-500 '
        >
          <IoClose />
        </button>
      </div>
      <div className='my-5'>
        <ul className='p-5 [&_>li>a]:font-bold hover:[&_>li]:border-indigo-400 space-y-6'>
          <li className='flex hover:text-purple-500  border-l-2 border-indigo-500 py-1 items-center'>
            <FaHome className='mx-3 text-xl text-purple-700' />
            <Link to={"/"}>خانه</Link>
          </li>
          <li className='flex border-l-2 hover:text-green-700  border-indigo-500 py-1 items-center'>
            <BsCashCoin className='mx-3 text-xl text-green-700' />
            <Link to={"/"}>کیف پول</Link>
          </li>
          <li className='flex border-l-2 hover:text-indigo-600   border-indigo-500 py-1 items-center'>
            <PiMicrophoneStageFill className='mx-3 text-xl text-indigo-600' />
            <Link to={"/"}>اخرین اخبار</Link>
          </li>
          {/* ---------------------------------- */}
          <li className='flex border-l-2 hover:text-sky-600   border-indigo-500 py-1 items-center'>
            <BiMessageRoundedDetail className='mx-3 text-xl text-sky-600' />
            <Link to={"/"}>پیام های من</Link>
            <p className='text-white flex justify-center items-center w-7 h-7 text-center rounded-md bg-orange-600 text-sm mx-2'>
              <b className='pt-1'>5</b>
            </p>
          </li>

          <li className='flex py-1 hover:text-red-600 border-l-2 border-indigo-500  items-center'>
            <HiMiniQuestionMarkCircle className='mx-3 text-xl text-red-600' />
            <Link to={"/"}>سوالات متداول</Link>
          </li>
          <li className='flex py-1 hover:text-blue-600 border-l-2 border-indigo-500  items-center'>
            <FcAbout className='mx-3 text-xl' />
            <Link to={"/"}>درباره ما</Link>
          </li>
        </ul>
      </div>
      <div className='my-[350px] p-3 space-x-5 space-x-reverse flex justify-center items-center'>
        <button className="flex ring-4 text-sm bg-sky-500 hover:bg-white text-white duration-300 ring-sky-300 px-3 py-2 rounded-sm hover:text-sky-500 items-center">
          <b>افزایش اعتبار</b>
          <BsCurrencyDollar className="mx-1" />
        </button>
        <button className="flex ring-4 bg-red-500 text-white hover:bg-white duration-300 ring-red-300 px-3 text-xs py-2 rounded-sm hover:text-red-500 items-center">
          <b>خروج</b>
          <FaPowerOff className="mx-1" />
        </button>
      </div>
    </section>
  );
};

export default HideMenu;

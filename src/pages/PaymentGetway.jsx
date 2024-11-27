import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MELAT from "../assets/img/melat.png";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineRefresh } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

const PaymentGetway = () => {
  const navigate = useNavigate();
  const initialTime = 5 * 60; // 10 دقیقه به ثانیه
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    if (timeLeft === 0) navigate("/"); // اگر زمان به صفر رسید، هیچ کاری نکنید

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // هر ثانیه یک واحد کم کنید
    }, 1000); // هر ثانیه
    return () => clearInterval(timerId); // پاک کردن تایمر هنگامUnmount شدن کامپوننت
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  // -----------------------
  const [secretKey, setSecretKey] = useState([8, 9, 0, 6, 1]);
  const makeSecretKey = () =>{
    let arr = []
    for(let i=0; i<5;i++)
    {
      let rand = Math.ceil(Math.random() * 9)
      arr.push(rand)
    }
    setSecretKey(arr)
  }
  return (
    <main className='p-32 bg-gray-50'>
      <h1 className='text-3xl font-bold'>درگاه پرداخت بانک ملت</h1>

      <div className='flex w-11/12 my-10 mx-auto justify-between'>
        <div className='w-2/3 shadow-md bg-white rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='bg-stone-400 p-3 px-8 text-white rounded-bl-[30px]'>
              اطلاعات کارت
            </h2>
            <p className='px-8'>
              <span className='text-gray-600 text-sm mx-3'>
                زمان باقی مانده
              </span>
              <b className={`${timeLeft <=20 && "text-red-500"} ${timeLeft <=20 && "animate-pulse"} `}>{
                formatTime(timeLeft)
              }</b>
            </p>
          </div>
          <form action='' className='px-5 space-y-8 my-5'>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>شماره کارت</strong>
                <span className='text-[10px] text-gray-500'>
                  شماره کارت 16 رقمی درج شده روی کارت راوارد کنید
                </span>
              </p>
              <div className='w-1/2 relative'>
                <CiCreditCard1 className='absolute text-3xl top-1 right-5 text-sky-800 font-bold' />
                <input
                placeholder="شماره کارت"
                  type='text'
                  className='border  outline-none rounded-full w-full py-2 px-14'
                />
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>شماره شنایی رمز دوم (CVV2)</strong>
                <span className='text-[10px] text-gray-500'>
                  شماره 3 یا 4 رقمی درج شده روی کارت
                </span>
              </p>
              <input
              placeholder="شماره شنایی رمز دوم (CVV2)"
                type='text'
                className='border  outline-none rounded-full w-1/2 py-2 px-5'
              />
            </div>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>تاریخ انقضای کارت</strong>
                <span className='text-[10px] text-gray-500'>
                  تاریخ انقضای کارت را وارد کیند
                </span>
              </p>
              <div className='w-1/2 space-x-5 space-x-reverse'>
                <input
                  placeholder='ماه'
                  type='text'
                  className='border text-center  outline-none rounded-full w-1/4 py-2 px-5'
                />
                <input
                  placeholder='سال'
                  type='text'
                  className='border text-center  outline-none rounded-full w-1/4 py-2 px-5'
                />
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>کد امنیتی</strong>
                <span className='text-[10px] text-gray-500'>
                  لطفا کد امنیتی داخل کادر را ورا دکنید
                </span>
              </p>
              <div className='relative w-1/2'>
                <button
                onClick={() => makeSecretKey()}
                  type='button'
                  className='text-center text-2xl absolute left-28 top-2 text-red-500 mx-3'
                >
                  <MdOutlineRefresh />
                </button>
                <span className='font-bold space-x-2 space-x-reverse flex justify-center items-center text-lg bg-gray-100 rounded-l-full px-5 py-[7px] text-center absolute left-0'>
                  {secretKey.map((sk) => (
                    <span
                      className={`${sk % 5 == 0 && "text-purple-500"}
                ${sk % 3 == 0 && "text-red-500"}
                ${sk  == 8 && "text-green-500"}
                ${sk  == 1 && "text-orange-500"}
                 ${sk == 7 && "text-sky-500"}`}
                    >
                      {sk}
                    </span>
                  ))}
                </span>
                <input
                placeholder="کد امنیتی"
                  type='text'
                  className='border  outline-none rounded-full w-full py-2 px-5'
                />
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>رمز اینترنتی کارت</strong>
                <span className='text-[10px] text-gray-500'>
                  رمز اینترنتی را وارد کنید
                </span>
              </p>
              <div className='relative w-1/2'>
                <button
                  onClick={() =>
                    alert(`رمز پویا ${Math.ceil(Math.random() * 999999)}`)
                  }
                  type='button'
                  className='text-center text-xs absolute hover:text-teal-500 left-5 top-2 flex items-center text-blue-500 mx-3'
                >
                  <RiMailSendFill className='!text-xl mx-2' />
                  دریافت رمز پویا
                </button>
                <input
                placeholder="رمز اینترنتی کارت(رمز پویا)"
                  type='text'
                  className='border  outline-none rounded-full w-full py-2 px-5'
                />
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <p className='flex space-y-2 flex-col'>
                <strong>ایمیل</strong>
                <span className='text-[10px] text-gray-500'>
                  لطفا ایمیل معتبر وارد کنید (اختیاری)
                </span>
              </p>
              <input
              placeholder="رمز پویا"
                type='text'
                className='border  outline-none rounded-full w-1/2 py-2 px-5'
              />
            </div>
            <div className='flex justify-end pl-32'>
              <button className='px-32 rounded-full mx-3 hover:ring-emerald-200 hover:ring-4 bg-emerald-400 text-white py-3'>
                پرداخت
              </button>
              <button className='px-10 rounded-full hover:ring-red-200 hover:ring-4 mx-3 bg-red-400 text-white py-3'>
                انصراف
              </button>
            </div>
          </form>
        </div>
        <div className='w-1/4 h-fit bg-white  rounded-md'>
          <h2 className='bg-stone-400 border-b border-gray-300 p-3 px-8 w-fit text-white rounded-bl-[30px]'>
            اطلاعات پذیرنده
          </h2>
          <div className='w-full h-52 my-10 py-1 bg-gray-50'>
            <img
              src={MELAT}
              className='w-full shadow-sm rounded-md  h-full'
              alt=''
            />
          </div>
          <div className='flex border-dashed border-b-4 border-gray-300 space-y-5 flex-col p-5'>
            <p>
              <span>نام پذیرنده</span> :
              <strong className='mx-3'>درگاه بانک ملت</strong>
            </p>
            <p>
              <span> شماره پذیرنده</span> :
              <strong className='mx-3'>10025780</strong>
            </p>
            <p>
              <span>شماره ترمینال</span> :
              <strong className='mx-3'>71503260</strong>
            </p>
            <p>
              <span>آدرس وبسایت</span>
              <Link className='text-blue-500 hover:text-blue-700 mx-3'>
                https://www.shekam.ir
              </Link>
            </p>
          </div>
          <div className='flex p-5 my-2 text-lg items-center justify-between'>
            <strong className='text-green-500'>مبلغ قابل پرداخت</strong>
            <strong className='text-green-500'>200,000 تومان</strong>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentGetway;

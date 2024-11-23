import React from "react";
import { PiCheckFatFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const ReservationStatus = () => {
  return (
    <section className='p-10'>
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        وضعیت رزرو ها
      </h2>
      <div className='my-5 w-1/2'>
        <table className='w-full'>
          <thead className='border-2 border-gray-300 rounded-sm border-collapse p-5'>
            <th className='border-2 py-3 px-5 border-gray-200'>وعده غذایی</th>
            <th className='border-2 py-3 px-5 border-gray-200'>شنبه</th>
            <th className='border-2 py-3 px-5 border-gray-200'>یکشنبه</th>
            <th className='border-2 py-3 px-5 border-gray-200'>دوشنبه</th>
            <th className='border-2 py-3 px-5 border-gray-200'>سه شنبه</th>
            <th className='border-2 py-3 px-5 border-gray-200'>چهارشنبه</th>
            <th className='border-2 py-3 px-5 border-gray-200'>پنجشنبه</th>
          </thead>
          <tr className=''>
            <td className='border-2 py-3 text-center font-bold px-5 border-gray-200'>صبحانه</td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <IoClose className='text-red-500 text-xl m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <IoClose className='text-red-500 text-xl m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
          </tr>
          <tr className=''>
            <td className='border-2 py-3 text-center font-bold px-5 border-gray-200'>ناهار</td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
          </tr>
          <tr className=''>
            <td className='border-2 py-3 text-center font-bold px-5 border-gray-200'>شام</td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <IoClose className='text-red-500 text-xl m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <PiCheckFatFill className="text-green-500 m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <IoClose className="text-red-500 text-xl m-auto" />
            </td>
            <td className='border-2 py-3 px-5 border-gray-200'>
              <PiCheckFatFill className='text-green-500 m-auto' />
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <PiCheckFatFill className="text-green-500 m-auto" />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default ReservationStatus;

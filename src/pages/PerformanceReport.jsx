import React from "react";

const PerformanceReport = () => {
  return (
    <section className='p-10'>
      <h2 className='font-bold border-r-4 px-5 p-3 rounded-full border-indigo-500'>
        گزارش عملکرد
      </h2>

      <table className='w-full odd:[&_>tr]:bg-gray-100 even:[&_>tr]:bg-white my-5'>
        <thead className='border-2 bg-stone-200 border-black rounded-sm border-collapse p-5'>
          <th className='border-2 py-3 px-5 border-gray-300'> نام</th>
          <th className='border-2 py-3 px-5 border-gray-300'>نام خانوادگی</th>
          <th className='border-2 py-3 px-5 border-gray-300'>کد دانشجویی</th>
          <th className='border-2 py-3 px-5 border-gray-300'>عملیات</th>
          <th className='border-2 py-3 px-5 border-gray-300'> شناسه عملیات </th>
          <th className='border-2 py-3 px-5 border-gray-300'>تاریخ عملیات</th>
          <th className='border-2 py-3 px-5 border-gray-300'>نام دستگاه</th>
          <th className='border-2 py-3 px-5 border-gray-300'>جزییات بیشتر</th>
        </thead>
        {[1, 2, 3, 4, 5, 6,,4,5,6,7,8,,5,6,6,6,6, 7, 8, 9].map(() => (
          <>
          <tr>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              امیرسجاد
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              نوری
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              40112507042
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              دریافت غذا
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              4500136099
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              1402/05/09
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              TYCN00W
            </td>
            <td className='border-2 text-center py-3 px-5 border-gray-200'>
              <button className="border-none hover:text-orange-600 text-red-500">نمایش جزییات</button>
            </td>
          </tr>
          </>
        ))}
      </table>
    </section>
  );
};

export default PerformanceReport;

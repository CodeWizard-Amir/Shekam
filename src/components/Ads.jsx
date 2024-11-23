import React from 'react'

const Ads = ({right,top}) => {
  return (
    <section className={`h-[500px] border flex justify-center ${right} ${top} items-center top-[15%] shadow-xl absolute w-96 border-gray-500 rounded-md `}>
        تبلیغات
    </section>
)
}

export default Ads
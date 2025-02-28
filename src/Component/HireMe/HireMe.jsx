import React from 'react'
import HireMeForm from '../../Component/HireMe/HireMeForm'

const HireMe = () => {
  return (
    <section className="bg-[#080707] text-white w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20   py-[105px]">
      <h1 className="text-[30px] font-extrabold mb-[15px]">
      Glad to Hear From You
      </h1>
      
      <p className='text-[18px] mb-[25px]'>Please fill out the form below to discuss any work opportunities with me.</p>

      <HireMeForm />
      
      </section>
  )
}

export default HireMe;
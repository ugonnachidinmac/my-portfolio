import React from 'react'
import ContactForm from '../../Component/ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className="bg-[#080707] text-white w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20   py-[105px]">
      <h1 className="text-[30px] font-extrabold mb-[15px]">
      Contact Me
      </h1>
      <p className='text-[18px] mb-[25px]'>Please fill out the form below and reach out to me.</p>

      <ContactForm />
      </section>
  )
}

export default ContactMe;
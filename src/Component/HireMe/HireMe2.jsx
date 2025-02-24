import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Message too short!").required("Required"),
});

const notify = () => toast.success("Message Sent Successfully!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});

const HireMe = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">Hire Me</h2>
      <p className="text-center text-gray-300 mb-6">
        I'm a Frontend Developer specializing in React, JavaScript, and UI/UX design. Let's build something great together!
      </p>

      {/* Contact Form */}
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          notify();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <Field
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
            <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />

            <Field
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
            <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />

            <Field
              name="message"
              as="textarea"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 h-28 resize-none"
            />
            <ErrorMessage name="message" component="div" className="text-red-400 text-sm" />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded disabled:bg-gray-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />

      {/* Direct Contact Links */}
      <div className="flex justify-center gap-6 mt-6 text-xl">
        <a href="mailto:your@email.com" className="text-yellow-500 hover:text-yellow-400">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-blue-500 hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" className="text-gray-400 hover:text-gray-300">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default HireMe;

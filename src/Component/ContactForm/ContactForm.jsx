import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { MdOutlineContactPhone } from "react-icons/md";

const SignupSchema = Yup.object().shape({
  yourName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  yourMessage: Yup.string().min(10, "Message too short!").required("Required"),
});

const notifySuccess = () => toast.success("Form submitted successfully!", {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
});

const notifyError = () => toast.error("Error! Submission failed! Please try again.", {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
});

export const ContactForm = () => (
  <div className="w-full max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4"><MdOutlineContactPhone /></h2>

    <Formik
      initialValues={{
        yourName: "",
        email: "",
        yourMessage: "",
      }}
      validationSchema={SignupSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const response = await axios.post("http://localhost:5000/contactForm", values);
          console.log(response.data);
          notifySuccess();
          resetForm();
        } catch (error) {
          console.error("Error submitting form:", error);
          notifyError();
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <label htmlFor="yourName" className="block">
            Your Name:
            <Field id="yourName" name="yourName" type="text" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600" />
            <ErrorMessage name="yourName" component="div" className="text-red-400 text-sm" />
          </label>

          <label htmlFor="email" className="block">
            Your Email:
            <Field id="email" name="email" type="email" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600" />
            <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
          </label>

          <label htmlFor="yourMessage" className="block">
            Comment/Suggestion:
            <Field id="yourMessage" name="yourMessage" as="textarea" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 h-28 resize-none" />
            <ErrorMessage name="yourMessage" component="div" className="text-red-400 text-sm" />
          </label>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded disabled:bg-gray-500" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
    <ToastContainer />
  </div>
);

export default ContactForm;

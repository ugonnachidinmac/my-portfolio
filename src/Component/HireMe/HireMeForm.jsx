import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { FaEnvelopesBulk } from "react-icons/fa6";

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  comment: Yup.string().min(10, "Message too short!").required("Required"),
});

const notifySuccess = () => toast.success("Form submitted successfully!");
const notifyError = () => toast.error("Submission failed! Please try again.");

export const HireMeForm = () => (
  <div className="w-full max-w-md mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4"><FaEnvelopesBulk /></h2>

    <Formik
      initialValues={{
        name: "",
        email: "",
        comment: "",
      }}
      validationSchema={SignupSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          // const response = await axios.post("http://localhost:5000/hireMeForm", values);
          console.log("Response:", response.data);
          notifySuccess(); // Show success toast
          resetForm();
        } catch (error) {
          console.error("Error submitting form:", error);
          notifyError(); // Show error toast
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <label htmlFor="name" className="block">
            Name: (Personal/ Organizational Name)
            <Field id="name" name="name" type="text" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600" />
            <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />
          </label>

          <label htmlFor="email" className="block">
            Email: (Personal/ Organizational Email)
            <Field id="email" name="email" type="email" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600" />
            <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
          </label>

          <label htmlFor="comment" className="block">
            Message:
            <Field id="comment" name="comment" as="textarea" className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 h-28 resize-none" />
            <ErrorMessage name="comment" component="div" className="text-red-400 text-sm" />
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

export default HireMeForm;

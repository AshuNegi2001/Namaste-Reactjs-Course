import contact from "../assets/Images/contact.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

const userSchema = Yup.object({
  name: Yup.string()
    .min(3, "name must be 3 chararcters")
    .required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  phoneNumber: Yup.string()
    .phone("IN", "invalid phone no.")

    .required("invalid phone no."),
  message: Yup.string().required("please type some message for us"),
});

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (value) => {
        alert(JSON.stringify(value));
      },
    });
  return (
    <>
      <div className="bg-amber-400 w-full h-screen flex justify-evenly">
        <div className="w-4/12">
          <img className="w-96 mt-12 mx-auto" src={contact} alt="" />
        </div>

        <div className="w-4/12">
          <form
            className="mt-12 mx-auto bg text-center px-24"
            onSubmit={handleSubmit}
          >
            <h1 className=" font-semibold text-4xl text-white">Contact Us</h1>
            <input
              type="text"
              className="w-full mt-4 mb-2 mx-auto p-2 rounded-lg"
              name="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
            />
            {errors.name && touched.name ? (
              <p className="text-red-500 ml-3 text-left">{errors.name}</p>
            ) : null}

            <input
              type="email"
              className="w-full mt-4 mb-2 mx-auto p-2 rounded-lg"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 ml-3   text-left">{errors.email}</p>
            ) : null}

            <input
              type="tel"
              className="w-full  mt-4 mb-2 mx-auto p-2 rounded-lg "
              name="phoneNumber"
              autoComplete="off"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Phone No."
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <p className="text-red-500 ml-3 text-left">
                {errors.phoneNumber}
              </p>
            ) : null}

            <textarea
              className="w-full mt-4 mb-2 mx-auto p-2 rounded-lg"
              name="message"
              id="message"
              cols={2}
              rows={2}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type your message here..."
            ></textarea>
            {errors.message && touched.message ? (
              <p className="text-red-500 ml-3 text-left">{errors.message}</p>
            ) : null}

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg mt-4 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

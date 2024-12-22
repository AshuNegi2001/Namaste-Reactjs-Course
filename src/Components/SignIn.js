import { useFormik } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string()
    .min(8, "password must be aleast 8 characters")
    .required("please enter your password"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: (value) => alert(JSON.stringify(value)),
    });

  return (
    <div className="sm:w-96 w-72 mx-auto my-14 ">
      <form
        className=" bg-amber-400 p-4 rounded-lg  text-center"
        onSubmit={handleSubmit}
      >
        <h1 className=" text-bold text-4xl sm:my-4 mb-4 mt-1 text-white">
          Sign in
        </h1>
        <input
          type="email"
          className="w-full mt-4 mb-2 p-2 box-border rounded-lg focus:outline-none "
          name="email"
          autoComplete="off"
          id="email"
          placeholder="Enter your email..."
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="text-red-500 text-left ml-3 ">{errors.email}</p>
        ) : null}
        <input
          type="password"
          className="w-full mt-4 mb-2 p-2 box-border rounded-lg focus:outline-none"
          name="password"
          autoComplete="off"
          id="password"
          placeholder="Enter your password..."
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="text-red-500  text-left ml-3">{errors.password}</p>
        ) : null}

        <button
          className="bg-gray-400 rounded-lg py-1 px-3 text-white my-4"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;

import Fields from "../components/Fields";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signUpSchema } from "../validations/authValidations";
import { signupUser } from "../services/auth.sevices";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
    try {
      const res = await signupUser(values);
      if (res) {
        toast("Registation Succesful", { theme: "colored" });
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: signUpSchema,
  });

  return (
    <div
      style={{ backdropFilter: "blur(6px)" }}
      className="w-[30%] bg-[#D9D9D929] rounded-lg  px-5 py-3 min-h-[456px] flex flex-col items-center"
    >
      <h3 className="text-[#A9A9A9] text-[2rem] font-bold">Welcome Back</h3>
      <div className="flex flex-col gap-2 w-full mt-[1rem]">
        <Fields
          type="text"
          value={values.username}
          name="username"
          errors={errors.username}
          onChange={handleChange}
          title="Enter your user_name"
          placeholder="enter user name"
        />{" "}
        <Fields
          type="email"
          value={values.email}
          name="email"
          errors={errors.email}
          onChange={handleChange}
          title="Email"
          placeholder="Enter Email"
        />{" "}
        <Fields
          type="password"
          value={values.password}
          name="password"
          errors={errors.password}
          onChange={handleChange}
          title="Password"
          placeholder="Enter Paswword"
        />
        <button
          onClick={() => handleSubmit()}
          className="py-2 border-[1px] text-[#FFFFFF7D] font-bold text-xl  rounded-lg border-[#6d9494]"
        >
          Continue
        </button>
      </div>
      <div className="mt-[1rem] flex flex-col  gap-1 w-full ">
        <p className="text-white">Already have an account</p>
        <Link
          className="text-[#00ffff] font-medium text-lg "
          to={"/auth/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpScreen;

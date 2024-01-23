import Fields from "../components/Fields";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../validations/authValidations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/auth.sevices";

const LoginScreen = () => {
  const navigate = useNavigate();
  const onSubmit = async (values: any) => {
   
    try {
      const res = await loginUser(values);
      if (res) {
        toast("Login Succesful", {theme:'colored'});
        navigate("/");
        localStorage.setItem("Roleaks", JSON.stringify(res?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  return (
    <div
      style={{ backdropFilter: "blur(10%)" }}
      className="w-[97%] md:w-[30%] bg-[#D9D9D929] rounded-lg  px-5 py-3 min-h-[456px] flex flex-col items-center"
    >
      <h3 className="text-[#A9A9A9] text-[2rem] font-bold">Welcome Back</h3>
      <div className="flex flex-col gap-8 w-full mt-[1rem]">
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
          Login
        </button>
        <p className="text-white">
          Forgot Password ? <span className="text-[#00FFFF]">Click Here</span>
        </p>
      </div>
      <div className="mt-[1rem] flex flex-col  gap-3 w-full ">
        <p className="text-white">Don't have an account</p>
        <Link className="text-[#00ffff] font-medium text-lg " to={"/auth/register"}>
          Create One
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;

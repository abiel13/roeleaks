import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import React from "react";
import { createLeakSchema } from "../validations/validations";
import { authStore } from "@/context/stores/authstore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createLeak } from "../services/leaks";

const New_Leak: React.FC = () => {
  const islogged = authStore((state) => state.isLoggedin);
  const token = authStore((state) => state.token);
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    if (!islogged) {
      toast("sign-in to create leak", { theme: "colored" });
      navigate("/auth/login");
    }
    try {
      const response = await createLeak(values, token);
      if (response) {
        toast.success(response.data, { theme: "colored" });
        navigate("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit,
    validationSchema: createLeakSchema,
  });

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl">Create New Leak</h3>

      <div className="w-[50%] flex flex-col gap-3">
        <h4 className="font-bold text-xl">Title of Leak</h4>
        <Input
          value={values.title}
          onChange={handleChange}
          className="border-white"
          name="title"
          placeholder="leak title"
        />
        {errors.title && (
          <p className="text-red-500 font-bold">{errors.title}</p>
        )}
      </div>

      <div className="w-[50%] flex flex-col gap-3">
        <h4 className="font-bold text-xl">Leak</h4>
        <Textarea
          value={values.content}
          onChange={handleChange}
          name="content"
          rows={8}
          placeholder="Paste Your Leak"
        />
        {errors.content && (
          <p className="text-red-500 font-bold">{errors.content}</p>
        )}
      </div>
      <div>
        <Button onClick={() => handleSubmit()} text="Create Leak" />
      </div>
    </div>
  );
};

export default New_Leak;

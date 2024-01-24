import * as yup from "yup";

export const createLeakSchema = yup.object({
  title: yup.string().required("leak title is required"),
  content: yup.string().required("leak content is required"),
});

import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is required"),
});

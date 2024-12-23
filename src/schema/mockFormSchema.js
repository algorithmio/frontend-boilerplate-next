import * as Yup from "yup";

export const mockFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number().positive().required("Age is required"),
  gender: Yup.string().required("Gender is required").oneOf(["MALE", "FEMALE"]),
});

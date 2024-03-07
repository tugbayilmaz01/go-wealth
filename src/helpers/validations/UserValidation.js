import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().min(4).max(12).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

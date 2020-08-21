import { useFormik } from "formik";
import { useEffect } from "react";

export const useCustomFormik = ({
  initialValues,
  validationSchema,
  submitCallback,
  setSubmitHandler,
}) => {
  const { submitForm, ...formik } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submitCallback(values);
    },
  });
  useEffect(() => {
    setSubmitHandler(() => submitForm);
  }, [setSubmitHandler, submitForm]);
  return formik
};

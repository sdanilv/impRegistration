import { Form } from "antd";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidInput from "../common/ValidInput";

const EmailValidationSchema = Yup.object().shape({
  email: Yup.string().email("Неверный имейл").required("Введите имейл"),
});

const EmailForm = ({ setSubmitHandler, setEmail, email }) => {
  const { handleSubmit, submitForm, ...formik } = useFormik({
    initialValues: {
      email,
    },
    validationSchema: EmailValidationSchema,
    onSubmit: (values) => {
      setEmail(values);
    },
  });
  useEffect(() => {
    setSubmitHandler(() => submitForm);
  }, []);

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onSubmit={handleSubmit}
    >
      <ValidInput
        name="email"
        placeholder="user@gmail.com "
        label="Email"
        formik={formik}
        type="email"
      />
    </Form>
  );
};

export default EmailForm;

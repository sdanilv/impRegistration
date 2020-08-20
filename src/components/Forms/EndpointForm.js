import { Form } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import ValidInput from "../common/ValidInput";

const EndpointValidationSchema = Yup.object().shape({
  endpointName: Yup.string().required("Введите имя"),
  endpointPrice: Yup.string()
    .matches(/\d\.?\d$/, "Не верный формат")
    .required("Введите цену"),
  endpointCount: Yup.string()
    .matches(/\d$/, "Не верный формат")
    .required("Введите количество"),
});

const EndpointForm = ({ setSubmitHandler, setEndpoint, endpoint }) => {
  const { handleSubmit, submitForm, ...formik } = useFormik({
    initialValues: endpoint,
    validationSchema: EndpointValidationSchema,
    onSubmit: (values) => {
      setEndpoint(values);
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
        name="endpointName"
        placeholder="Endpoint 12334 "
        label="Название товара"
        formik={formik}
      />
      <ValidInput
        name="endpointPrice"
        placeholder="24"
        label="Цена"
        formik={formik}
        suffix="грн"
      />
      <ValidInput
        name="endpointCount"
        placeholder="5"
        label="Количество"
        formik={formik}
        suffix="шт"
      />
    </Form>
  );
};

export default EndpointForm;

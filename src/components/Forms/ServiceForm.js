import { Form } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import ValidInput from "../common/ValidInput";
import ValidTextArea from "../common/ValidTextArea";

const ServiceValidationSchema = Yup.object().shape({
  serviceName: Yup.string()
    .min(3, "Не должно быть короче трех символов")
    .max(500, "Слишком длинное")
    .required("Ведите имя сервиса"),
  serviceDescription: Yup.string().min(3, "Введите больше трех символов!"),
});

const ServiceForm = ({ setSubmitHandler, setService, service }) => {
  const { handleSubmit, submitForm, ...formik } = useFormik({
    initialValues: service,
    validationSchema: ServiceValidationSchema,
    onSubmit: (values) => {
      setService(values);
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
        name="serviceName"
        placeholder="Service 1233"
        label="Название магазина"
        formik={formik}
      />

      <ValidTextArea
        formik={formik}
        name="serviceDescription"
        placeholder="Сервис для продаж"
        label="Описание"
      />
    </Form>
  );
};

export default ServiceForm;

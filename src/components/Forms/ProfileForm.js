import { Form, Input } from "antd";
import { useFormik } from "formik";
import React, { useEffect } from "react";

import * as Yup from "yup";
import ValidInput from "../common/ValidInput";

const { TextArea } = Input;
const EndpointValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/.+\s.+\s.+/, "Введите ФИО в формате Иванов Иван Иванович")
    .required("Введите ФИО"),
  birthday: Yup.string()
    .matches(/\d\d\.\d\d.\d{4}/, "Дата должна быть в формате 31.12.2020")
    .required("Введите день рождения"),
  telephone: Yup.string()
    .matches(/\+38\d{10}/, "Телефон должен быть в формате +380661234567")
    .required("Введите номер телефона"),
  INN: Yup.string()
    .matches(/\d{10}/, "Не верный ИНН")
    .required("Введите ИНН"),
  postIndex: Yup.string()
    .matches(/\d{5}/, "Неверный индекс")
    .required("Введите свой индекс"),
  address: Yup.string().required("Введите свой адрес")
});

const ProfileForm = ({ setSubmitHandler, setPersonal, personal }) => {
  const { handleSubmit, submitForm, ...formik } = useFormik({
    initialValues: personal,
    validationSchema: EndpointValidationSchema,
    onSubmit: (values) => {
      setPersonal(values);
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
        name="name"
        placeholder="Иванов Иван Иванович"
        label="ФИО"
        formik={formik}
      />

      <ValidInput
        name="telephone"
        placeholder="+380661234567"
        label="Телефон"
        formik={formik}
      />
      <ValidInput
        name="birthday"
        placeholder="31.10.1993"
        label="День рождения"
        formik={formik}
      />
      <ValidInput
        name="INN"
        placeholder="1234567890"
        label="ИНН"
        formik={formik}
      />
      <ValidInput
          name="site"
          placeholder="mysite.com"
          label="Адрес сайта"
          formik={formik}
      />
      <ValidInput
          name="address"
          placeholder="Киев, Шолом-Алейхема 20/17"
          label="Адрес проживания"
          formik={formik}
      />
      <ValidInput
        name="postIndex"
        placeholder="12345"
        label="Индекс"
        formik={formik}
      />
    </Form>
  );
};
export default ProfileForm;

import { Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import {useEffect} from 'react';
const { TextArea } = Input;
const ServiceForm = ({setSubmitHandler}) => {
  const { handleSubmit, handleChange, values, submitForm } = useFormik({
    initialValues: {
      serviceName: "",
      serviceDescription: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(()=>{
    setSubmitHandler(()=>submitForm);
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="serviceName"
        placeholder="Имя сервиса"
        value={values.serviceName}
        onChange={handleChange}
      />
      <TextArea
        autoSize
        name="serviceDescription"
        placeholder="Описание сервиса"
        value={values.serviceDescription}
        onChange={handleChange}
      />
    </form>
  );
};

export default ServiceForm;

import {Input} from 'antd';
import React from 'react';
import { useFormik } from 'formik';
import {useEffect} from 'react';
const EmailForm = ({setSubmitHandler}) =>{
  const { handleSubmit, handleChange, values,submitForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(()=>{
    setSubmitHandler(()=>submitForm);
  },[])

  return (
      <form onSubmit={handleSubmit} >
        <Input
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
        />
        <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
        />

      </form>
  );
}

export default EmailForm;


import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import RegistrSteps from "./RegistrSteps";
import Switch from "./Switch";

const Registration = (props) => {
  const [current, setCurrent] = useState(0);
  const [submitHandler, setSubmitHandler] = useState(null);

  return (
    <>
      <RegistrSteps current={current} />
      <div style={style}>
        <Switch setSubmitHandler={setSubmitHandler} pageNumber={current} />
      </div>
      <NavigationButton
        submitHandler={submitHandler}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
};

const style = {
  margin: 20,
};
export default Registration;

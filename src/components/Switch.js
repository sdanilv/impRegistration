import React from "react";
import CardForm from "./Forms/CardForm";
import EmailForm from "./Forms/EmailForm";
import EndpointForm from "./Forms/EndpointForm";
import FinalForm from "./Forms/FinalForm";
import ProfileForm from "./Forms/ProfileForm";
import ServiceForm from "./Forms/ServiceForm";

const Switch = ({ setSubmitHandler, pageNumber }) => {
  switch (pageNumber) {
    case 0:
      return <ServiceForm setSubmitHandler={setSubmitHandler} />;
    case 1:
      return <EndpointForm setSubmitHandler={setSubmitHandler} />;
    case 2:
      return <EmailForm setSubmitHandler={setSubmitHandler} />;
    case 3:
      return <ProfileForm setSubmitHandler={setSubmitHandler} />;
    case 4:
      return <CardForm setSubmitHandler={setSubmitHandler} />;
    case 5:
      return <FinalForm setSubmitHandler={setSubmitHandler} />;
  }
};

export default Switch;

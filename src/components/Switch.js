import React from "react";
import CardForm from "./Forms/CardForm";
import EmailForm from "./Forms/EmailForm";
import EndpointForm from "./Forms/EndpointForm";
import FinalForm from "./Forms/FinalForm";
import ProfileForm from "./Forms/ProfileForm";
import ServiceForm from "./Forms/ServiceForm";

const Switch = ({
  service,
  endpoint,
  email,
  personal,
  setSubmitHandler,
  pageNumber,
  setService,
  setEndpoint,
  setEmail,
  setPersonal,
}) => {
  switch (pageNumber) {
    case 0:
      return (
        <ServiceForm
          service={service}
          setService={setService}
          setSubmitHandler={setSubmitHandler}
        />
      );
    case 1:
      return (
        <EndpointForm
          endpoint={endpoint}
          setEndpoint={setEndpoint}
          setSubmitHandler={setSubmitHandler}
        />
      );
    case 2:
      return (
        <EmailForm
          email={email}
          setEmail={setEmail}
          setSubmitHandler={setSubmitHandler}
        />
      );
    case 3:
      return (
        <ProfileForm
          personal={personal}
          setPersonal={setPersonal}
          setSubmitHandler={setSubmitHandler}
        />
      );
    case 4:
      return <CardForm setSubmitHandler={setSubmitHandler} />;
    case 5:
      return <FinalForm setSubmitHandler={setSubmitHandler} />;
  }
};

export default Switch;

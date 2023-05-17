import React, { useEffect } from "react";
import Form from "./Form";
import "../../assets/css/contact.css"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Form />
    </>
  );
};

export default Contact;

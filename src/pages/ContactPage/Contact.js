import React, { useEffect} from "react";
import "../../assets/css/contact.css";
import LazyForm from "./Form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LazyForm />
    </>
  );
};

export default Contact;

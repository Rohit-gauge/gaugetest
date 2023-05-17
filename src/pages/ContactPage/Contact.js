import React, { useEffect, lazy, Suspense } from "react";
import "../../assets/css/contact.css";

const LazyForm = lazy(() => import("./Form"));

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <LazyForm />
      </Suspense>
    </>
  );
};

export default Contact;

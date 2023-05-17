import React, { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Turnstile from "react-turnstile";

const Form = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstname":
        setfirstname(value);
        break;
      case "lastname":
        setlastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      toast.warning("All fields required! ");
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateForm();

    if (isValid) {
      const data = {
        firstname,
        lastname,
        email,
        phone,
        message,
      };

      axios
        .post(`${process.env.REACT_APP_API_URL}/api/contacts`, data, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          toast.success("Thank you for Feedback! ");
        })
        .catch((error) => {});
    }
  };

  const onVerify = () => {
    // handle verification event
  };

  return (
    <section className="about-main-wrap contact-main-wrap mb-14 ">
      <section className="text-gray-600 body-font ">
        <div className="xl:px-10 px-4 mx-auto flex  lg:pt-44 pt-10 lg:flex-row flex-col  mb-3 lg:mb-6">
          <div className="lg:flex-grow lg:w-1/2   lg:px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-start lg:mx-auto">
            <div className="lg:w-full w-full form-wrap  ">
              <div className="form-title">Request A Callback</div>
              <div className="form-subtitle para">
                <p>No spamming ever. We revert on the same day.</p>
              </div>
              <form
                ref={form}
                className="w-full  "
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 ">
                    <label className="formLabel" htmlFor="grid-first-name">
                      First Name
                    </label>
                    <input
                      className="appearance-none contact-input block w-full   text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="firstname "
                      name="firstname"
                      type="text"
                      value={firstname}
                      onChange={handleChange}
                      placeholder="Mohan"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="formLabel" htmlFor="grid-last-name">
                      Last Name
                    </label>
                    <input
                      className="appearance-none block contact-input w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={lastname}
                      onChange={handleChange}
                      placeholder="Kumar"
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="formLabel" htmlFor="grid-first-name">
                      Email Address
                    </label>
                    <input
                      className="appearance-none contact-input block w-full   text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="mohan.kumar@gmail.com"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="formLabel" htmlFor="grid-last-name">
                      Phone
                    </label>
                    <input
                      className="appearance-none block contact-input w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="phone"
                      name="phone"
                      type="number"
                      value={phone}
                      onChange={handleChange}
                      placeholder="9087690876"
                    />
                  </div>
                </div>

                <div className="md:flex md:flex-col  mb-6">
                  <div className="md:w-1/3">
                    <label className="formLabel" htmlFor="grid-last-name">
                      Your Message
                    </label>
                  </div>
                  <div className="md:w-full">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={handleChange}
                      rows="4"
                      className="block mt-5 p-2.5 w-full text-sm text-black textarea   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Message"
                    ></textarea>

                    <div>
                      <Turnstile
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        theme="light"
                        className="pt-4"
                        onVerify={onVerify}
                      />
                    </div>
                  </div>
                </div>

                <div className="checkbox mb-3">
                  <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAAAAEKdao7UYemlS-Z"
                    data-theme="light"
                  ></div>
                </div>

                <div id="myWidget"></div>

                <button type="submit" className="send-btn cursor-pointer">
                  Send Message
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>

          <div className="lg:w-1/2   md:pr-36 ">
            <div className="red get-touch-title">Contact Us</div>
            <h3 className="get-touch-subtitle  ">Get In Touch With Us</h3>

            <p className=" para pb-10">
              Get in touch with us for any questions or comments. Contact us
              through our form, email, or phone. Our team will respond promptly.
              Thank you.
            </p>

            <div className="form-widget-container">
              <div className="form-hover-heading ">
                <div className="form-title-heading">
                  Email Now:{" "}
                  <span className="form-highlight-txt">hello@gauge.ro</span>
                </div>
              </div>
            </div>

            <div className="form-widget-container-two">
              <div className="form-hover-heading ">
                <div className="form-title-heading">
                  Call Us Now:{" "}
                  <span className="form-highlight-txt">9779982072</span>
                </div>
              </div>
            </div>

            <div className="form-widget-container-three ">
              <span className="form-title-heading">
                Office Address: <br />{" "}
                <span className="form-highlight-txt">
                  D-1075, 63 Degree East, Kodathi, Varthur, Hobli, 1st Cross,
                  Bengaluru - 560035 <br />
                </span>
                <span className="highlight-after-text">
                  <a
                    href="https://www.google.co.in/maps/place/Assetz+63+Degree+East/@12.8852351,77.701989,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae132e85f35b87:0xdaa2ef4ff50b8d2f!8m2!3d12.8852351!4d77.7041777!16s%2Fg%2F11g1drl9k7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Us
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Form;

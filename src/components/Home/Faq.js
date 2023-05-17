import React, { useState, useEffect } from "react";
import axios from "axios";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [faqData, setfaqData] = useState([]);

  const handleAccordionItemToggle = (itemId) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  useEffect(() => {
    async function fetchfaqData() {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}/api/faqs`,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "content-Type": "application/json",
          },
        };
        const response = await axios.request(config);
        setfaqData(response.data.data);
      } catch (error) {}
    }

    fetchfaqData();
  }, []);

  return (
    <section className=" body-font lg:m-10 m-6 md:mt-16 mt-20 faq-wrap ">
      <h2
        className="font-semibold faq-title lg:text-4xl text-2xl text-center mb-10
         "
      >
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-5xl mx-auto space-y-4">
        {faqData &&
          faqData.map((item) => (
            <div
              key={item.id}
              className="  bg-white rounded-md shadow-md faq-box"
            >
              <div
                className={`flex items-center faq-info justify-between lg:p-4 p-3 cursor-pointer ${
                  activeItem === item.id
                    ? "bg-blue-600 rounded-md text-white"
                    : ""
                }`}
                onClick={() => handleAccordionItemToggle(item.id)}
              >
                <h2
                  className={`text-lg font-medium text-gray-900 ${
                    activeItem === item.id ? "text-white" : ""
                  }`}
                >
                  {item.attributes.title}
                </h2>
                <button
                  className={`faq-toggle-btn ${
                    activeItem === 1 ? "text-white" : ""
                  }`}
                  aria-expanded={activeItem === item.id}
                  aria-controls={`faq-content-${item.id}`}
                >
                  {activeItem === item.id ? "-" : "+"}
                </button>
              </div>
              {activeItem === item.id && (
                <div className="p-4 faq-subinfo">
                  <p>{item.attributes.subtitle}</p>
                </div>
              )}
            </div>
          ))}
      </div>

      <div className="rt-arrow-btn w-fit text-center rounded-full pre-launch-btn lg:px-16 px-6 lg:py-5 py-4 flex mx-auto mt-14 shadow-md">
        <a
          href="https://api.whatsapp.com/send/?phone=919779982072&amp;text=Hi%2C+I+want+to+know+the+latest+deal+on+Gauge+Smart+Water+Purifier.&amp;type=phone_number"
          rel="nofollow"
          className="rt-readmore-btn text-white font-bold "
        >
          Get A Pre-Launch Deal
        </a>
      </div>
    </section>
  );
};
export default Faq;

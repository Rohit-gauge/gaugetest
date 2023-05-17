import React from "react";

const OurCompany = () => {
  const mobileImageUrl =
  "https://ik.imagekit.io/aq3ybtarw/landing/Resize_aboutus-min.webp?updatedAt=1684147912716";
  const isMobile = window.innerWidth <= 1268;

  const line =
    "https://ik.imagekit.io/aq3ybtarw/gauge/Vector-628.png?updatedAt=1683742578777";

  return (
    <section className="about-main-wrap pb-32 lg:pb-12 ">
      <div className="lg:px-16 px-4 mx-auto flex lg:py-24  py-3  lg:flex-row flex-col  mb-3 lg:mb-6  ">
        <div className="lg:flex-grow lg:w-1/2    flex md:items-start md:text-left mb-6 text-start lg:mx-auto">
          <div className="company-widget-container pt-20 lg:pt-0   lg:pr-40">
            <div className="rt-hover-heading line  lg:pt-20 pt-4">
              <div className="title-company mb-9">About Our Company</div>
              <div className="about-title-heading text-black text-capitalize ">
                Meet The Team Behind India's
                <br lass="block md:hidden" />
                <span className="about-highlight-text ">
                  Smartest Water Purifier
                  <br className="hidden lg:block" />
                </span>
              </div>
            </div>
            <p className="about-para-one mb-6 w- whitespace-pre-line ">
              Our team of experts delivers top-notch water purification
              solutions for a healthier India. Committed to quality and customer
              satisfaction.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:pt-14  relative justify-center flex items-center  ">
          <img
            src={isMobile ? mobileImageUrl : mobileImageUrl}
            alt="hero"
            className={`object-cover relative  object-center rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer contact-image`}
            loading="lazy"
           
          />
          <img
            decoding="async"
            width="199"
            height="264"
            src={line}
            className="attachment-full size-full wp-image-36401 absolute top-16 -inset-24 hidden xl:block "
            alt="company-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCompany;

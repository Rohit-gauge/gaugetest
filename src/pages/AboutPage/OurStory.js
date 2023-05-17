import React from "react";

const OurStory = () => {
  const mobileImageUrl =
    "https://ik.imagekit.io/aq3ybtarw/landing/Resize_ourstory-min.webp?updatedAt=1681770130972";
  const isMobile = window.innerWidth <= 1268;
  return (
    <section className="text-gray-600 body-font ">
      <div className="xl:px-10 px-4 mx-auto flex  lg:pt-44 pt-10 lg:flex-row flex-col  mb-3 lg:mb-6">
        <div className="lg:flex-grow lg:w-1/2   lg:px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-start lg:mx-auto">
          <div className="customer-need-wrap  ">
            <div className="lg:w-full w-full  ">
              <img
                src={isMobile ? mobileImageUrl : mobileImageUrl}
                alt="hero"
                className={`object-cover relative object-center rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer customer-image`}
              
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2   md:pr-36 ">
          <div className="co-founder-title-wrap">
            <div className="our-story-wrap mb-10">Our Story</div>
            <div className="elementor-spacer">
              <div className="elementor-spacer-inner"></div>
            </div>
            <p className=" cofounder-title ">
              Our story at Gauge.ro began with a mission to solve a problem we
              faced ourselves. Like many others, we struggled with managing our
              water purifier at home and keeping it in a perfect condition. We
              encountered issues such as poor service, water leakage, and the
              high cost of ownership, which led us to understand the problems
              faced by other people just like us.
            </p>

            <p className="cofounder-title">
              Determined to find a solution, we set out on a journey to develop
              innovative water purification systems that would address these
              common problems and provide a better experience for customers. We
              believed that technology and a customer-first approach could make
              a difference in the water purification industry, and we were
              committed to making it happen.
            </p>

            <p className="cofounder-title">
              Our team of experts worked tirelessly to bring our vision to life,
              using the latest technology and conducting extensive research to
              identify the needs of our customers. Our focus on customer
              satisfaction and continuous improvement is helping our aim to
              become a leader in the industry, offering a wide range of products
              and services that are helping to improve public health and enhance
              the quality of life for people everywhere.
            </p>

            <p className="cofounder-title">
              From families looking for a safe source of drinking water to
              communities seeking solutions to water scarcity, we are here to
              help. Our passion for providing clean water and improving lives
              drives us forward every day. We believe that everyone deserves
              access to clean, safe water, and we are dedicated to making it a
              reality. Join us on our mission to make a positive impact in the
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

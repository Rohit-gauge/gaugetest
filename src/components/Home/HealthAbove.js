import React, { useMemo } from "react";
import mobileImageUrl from "../../assets/images/gauge/health-mobile.webp";
import desktopImageUrl from "../../assets/images/gauge/health-above.webp";

const HealthAbove = () => {
  function scrollToNextSection() {
    const nextSection = document.querySelector("#exp");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const isMobile = useMemo(() => window.innerWidth <= 1268, []);

  return (
    <section className="text-gray-600 body-font ">
      <div className="xl:px-10 px-4 mx-auto flex lg:pt-10  pt-20  lg:flex-row flex-col  mb-3 lg:mb-6">
        <div className="lg:flex-grow lg:w-1/2   lg:px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-start lg:mx-auto">
          <div className="customer-need-wrap  ">
            <div className="lg:w-full w-full lg:pt-24 ">
              <img
                src={isMobile ? mobileImageUrl : desktopImageUrl}
                alt="hero"
                className={`object-cover relative object-center rounded-3xl transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer landing-page`}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2   ">
          <div className="health-wrap ">
            <div className="text-left  pl-12 pr-6 py-3 lg:max-w-fit w-fit lg:mt-10 bg-white rounded-full shadow-lg relative customer-btn">
              Health Above All
              <div className="elementor-icon absolute left-5 top-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M5.367 2.36968L0.839844 4.01463V8.20995C0.839844 12.0213 0.849325 12.4479 0.925172 12.9457C1.27597 15.1785 2.17192 16.9277 3.7979 18.5395C4.76496 19.5018 5.7652 20.2223 7.09727 20.9144C8.09751 21.4359 9.57654 22 9.93208 22C10.1122 22 11.2025 21.6302 11.814 21.36C13.3879 20.6679 14.7863 19.7578 15.8909 18.6959C17.7207 16.9419 18.7541 14.8134 18.9722 12.3294C19.0054 11.9407 19.0196 10.419 19.0101 7.87338L18.9959 4.00989L14.4687 2.36494C11.98 1.45951 9.93208 0.719999 9.91786 0.719999C9.90364 0.719999 7.85575 1.45951 5.367 2.36968ZM14.4924 8.34743L15.0139 8.86888L11.705 12.1777L8.4009 15.4818L6.61374 13.6947L4.82658 11.9075L5.35752 11.3719L5.88845 10.8362L7.14468 12.0924L8.4009 13.3486L11.1646 10.5849C12.6816 9.06798 13.933 7.82597 13.9473 7.82597C13.9615 7.82597 14.208 8.063 14.4924 8.34743Z"
                    fill="#1962F2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <h2 className="rt-textappear-line49 rt-textappear-line ml1 text-black text-4xl font-bold text-capitalize pt-8 pb-4  ">
            {" "}
            Pure Water Starts With{" "}
            <span className="rt-heading-div">
              {" "}
              <span className="text-wrapper">
                {" "}
                <br />
                <span className="smarter ">Clean Filters</span>{" "}
                <span className="line line2"></span>{" "}
              </span>{" "}
            </span>{" "}
            <span className="after-text"></span>
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2  lg:pr-20">
              <div className="text-4xl health-title text-black font-bold mb-1">
                3 Cr+
              </div>
              <div className="text-lg text-gray-700 health-subtitle font-semibold mb-1">
                People Suffer
              </div>
              <p className="text-gray-600 mb-1 health-info para">
                from waterborne diseases every year in India due to lack of pure
                drinking water.
              </p>
            </div>
            <div className="w-full md:w-1/2    lg:pr-20 mt-4 lg:mt-0">
              <div className="text-4xl health-title text-black font-bold mb-1">
                50%
              </div>
              <div className="text-lg text-gray-700  health-subtitle  font-semibold mb-1">
                Of The Population
              </div>
              <p className="text-gray-600 health-info mb-1 para">
                neglects to replace their water purifier filters as recommended.
              </p>
            </div>
          </div>

          <div className="save-info-wrap flex mt-6   lg:pr-36">
            <div className="icon-check mt-2">
              <div className="elementor-icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                    fill="#39C69B"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="check-point">
              <p className="px-4 para">
                <span className="font-bold">Regular replacement:</span> of the
                water filters not only improves the quality of water but also
                protect us from several waterborne diseases.
              </p>
            </div>
          </div>

          <div className="save-info-wrap flex mt-6  lg:pr-36">
            <div className="icon-check mt-2">
              <div className="elementor-icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                    fill="#39C69B"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="check-point">
              <p className="px-4 para">
                We have over 10 sensors to help you detect the water filters
                quality. Once we detect the problem with water filters
                <span className="font-bold pl-2">
                  we automatically ship them
                </span>{" "}
                India’s to you without you reminding us.
              </p>
            </div>
          </div>
          <div
            onClick={scrollToNextSection}
            className="rt-arrow-btn rounded-full bg-blue-500 w-fit  lg:px-12 px-10 lg:py-5 py-5 flex m-auto lg:mt-7 mt-5 mb-10"
          >
            <a
              href="#smartly-conserved"
              rel="nofollow"
              className="rt-readmore-btn text-white font-bold"
            >
              Next: More Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAbove;

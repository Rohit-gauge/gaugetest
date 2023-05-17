import React from "react";

const CoFOunder = () => {
  const mobileImageUrl =
    "https://ik.imagekit.io/aq3ybtarw/gauge/Resize_aboutuscircle-min__2_.webp?updatedAt=1682074878127";

  const desktopImageUrl =
    "https://ik.imagekit.io/aq3ybtarw/gauge/aboutuscircle.webp?updatedAt=1680330406628";

  const isMobile = window.innerWidth <= 1268;

  return (
    <section className="text-gray-600 body-font co-founder">
      <div className="container  flex lg:px-16   xl:flex-row flex-col items-center sm:items-start  px-4 md:pt-16  ">
        <div>
          <img
            src={isMobile ? mobileImageUrl : desktopImageUrl}
            alt="hero"
            className={`object-cover relative object-center rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 max-w-full cursor-pointer customer-image`}
          />
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full  md:pl-10 flex flex-col md:items-start md:text-left  text-start cofounder-main-wrap md:pr-12  ">
          <div className="co-founder-title-wrap">
            <p className=" cofounder-title ">
              “ As the co-founder of Gauge.ro, I am passionate about providing
              safe drinking water for all through innovative water purification
              solutions.
            </p>

            <p className="cofounder-title">
              Our team uses cutting-edge technology and puts customers first to
              solve problems and enhance health and well-being. ”
            </p>
          </div>

          <div className="cofounder-widget-container">
            {" "}
            <img
              decoding="async"
              src="https://ik.imagekit.io/aq3ybtarw/gauge/kavita_484-q2ovkyg7r1uxs2gjfye0mmawmcqgxn04nuyqmfe81q__1_.webp?updatedAt=1683749140985"
              title="kavita_484"
              alt="Kavita (Co-founder)"
              loading="lazy"
            />
          </div>

          <div className="co-founder-info">
            <div className="cofounder-name">Kavita Bhatia</div>

            <div className="cofounder-title cofoudner-desgination">
              Co-Founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFOunder;

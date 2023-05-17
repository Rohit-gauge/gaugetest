import React from "react";

const Experience = () => {
  return (
    <section id="exp" className="text-gray-600 body-font experience-wrap pb-12">
      <div className="container xl:px-16 lg:pt-4 md:mt-10 lg:pb-4    px-4  mx-auto">
        <div className="">
          <h3 className="md:text-center exp-title  ">
            {" "}
            Water Purification Experience, <br />{" "}
            <span className="rt-heading-div">
              {" "}
              <span className="text-wrapper">
                {" "}
                <span className="exp-subtitle">Reimagined</span>{" "}
                <span className="line line2"></span>{" "}
              </span>{" "}
            </span>{" "}
            <span className="after-text"></span>
          </h3>

          <p className="exp-info md:text-center para">
            Our endless pursuit to design the best water purifier continues …
          </p>
        </div>

        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-5">
          <div className="w-full px-4 pb-4">
            <div className="bg-gray-100 card-wrap mt-10 sm:mt-0 p-4 sm:p-6 md:p-6 lg:p-2 lg:px-4 xl:p-6 rounded-lg shadow-lg">
              <div className="experience-element experience-widget__width-initial ml-4 experience-view-default experience-widget experience-widget-icon rounded-full shadow-md">
                <div className="experience-widget-container p-6">
                  <div className="experience-icon-wrapper text-center sm:text-left">
                    <div className="experience-icon note-icon pl-4 pt-1">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-fas-file-signature text-white"
                        viewBox="0 0 576 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info-wrap">
                <h5>Instant Hot Water</h5>
                <p>
                  Food grade water tap provides hot water within 3 seconds from
                  luke warm to very hot.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 pb-4">
            <div className="bg-gray-100 card-wrap mt-10 sm:mt-0 p-4 sm:p-6 md:p-6 lg:p-2 lg:px-4 xl:p-6 rounded-lg shadow-lg">
              <div className="experience-element experience-widget__width-initial ml-4 experience-view-default experience-widget experience-widget-icon rounded-full shadow-md exp-icon-two ">
                <div className="experience-widget-container p-6">
                  <div className="experience-icon-wrapper note-svg text-center">
                    <div className="experience-icon">
                      <svg
                        width="44"
                        height="74"
                        viewBox="0 0 44 74"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M43.2959 20.7422C43.0359 20.4611 42.7178 20.2369 42.3626 20.0844C42.0074 19.932 41.6231 19.8546 41.235 19.8575H2.76501C2.37693 19.8546 1.99264 19.932 1.63742 20.0844C1.2822 20.2369 0.964119 20.4611 0.704115 20.7422C0.444805 21.0237 0.249524 21.3555 0.131121 21.7159C0.0127185 22.0763 -0.0261234 22.4571 0.0171507 22.8332L4.96329 66.3164C5.18743 68.2926 6.15395 70.1177 7.6763 71.4396C9.19866 72.7614 11.1689 73.4863 13.2069 73.4742H30.8481C32.886 73.4863 34.8563 72.7614 36.3787 71.4396C37.901 70.1177 38.8675 68.2926 39.0917 66.3164L43.9828 22.8332C44.0261 22.4571 43.9873 22.0763 43.8689 21.7159C43.7505 21.3555 43.5552 21.0237 43.2959 20.7422ZM33.541 65.7266C33.4663 66.3853 33.1441 66.9937 32.6367 67.4343C32.1292 67.8749 31.4724 68.1165 30.7931 68.1125H13.1794C12.5001 68.1165 11.8433 67.8749 11.3359 67.4343C10.8284 66.9937 10.5062 66.3853 10.4315 65.7266L7.65619 41.3042H36.3438L33.541 65.7266ZM36.9483 35.9425H7.05166L5.84261 25.2192H38.1574L36.9483 35.9425Z"
                          fill="white"
                        ></path>{" "}
                        <path
                          d="M10.9255 2.51241C11.1636 2.58234 11.3925 2.68045 11.6074 2.80467C12.3622 3.25514 13.2248 3.49299 14.1038 3.49299C14.9827 3.49299 15.8453 3.25514 16.6001 2.80467C17.0756 2.53574 17.6126 2.39441 18.1588 2.39441C18.7051 2.39441 19.242 2.53574 19.7175 2.80467C20.4814 3.24146 21.3461 3.47123 22.226 3.47123C23.106 3.47123 23.9707 3.24146 24.7346 2.80467C25.21 2.53574 25.747 2.39441 26.2933 2.39441C26.8395 2.39441 27.3765 2.53574 27.852 2.80467C28.6237 3.24572 29.496 3.48057 30.3849 3.4866C31.2436 3.48483 32.0856 3.24907 32.8203 2.80467C33.0352 2.68045 33.2641 2.58234 33.5023 2.51241C33.8123 2.42198 34.0737 2.21209 34.229 1.92891C34.3843 1.64574 34.4207 1.31247 34.3303 1.00242C34.2399 0.692377 34.03 0.430954 33.7468 0.275663C33.4636 0.120372 33.1304 0.0839334 32.8203 0.174363C32.3934 0.30612 31.9844 0.490177 31.6026 0.722343C31.2147 0.949199 30.7734 1.06876 30.324 1.06876C29.8746 1.06876 29.4333 0.949199 29.0454 0.722343C28.201 0.248733 27.2492 0 26.2811 0C25.313 0 24.3612 0.248733 23.5168 0.722343C23.1248 0.950124 22.6795 1.07011 22.226 1.07011C21.7726 1.07011 21.3273 0.950124 20.9352 0.722343C20.0909 0.248733 19.1391 0 18.171 0C17.2029 0 16.2511 0.248733 15.4067 0.722343C15.0188 0.949199 14.5775 1.06876 14.1281 1.06876C13.6787 1.06876 13.2374 0.949199 12.8495 0.722343C12.4677 0.490177 12.0587 0.30612 11.6318 0.174363C11.3217 0.0839334 10.9884 0.120372 10.7053 0.275663C10.4221 0.430954 10.2122 0.692377 10.1218 1.00242C10.0313 1.31247 10.0678 1.64574 10.2231 1.92891C10.3784 2.21209 10.6398 2.42198 10.9498 2.51241H10.9255ZM32.8447 12.3517C32.4177 12.4835 32.0087 12.6675 31.6269 12.8997C31.239 13.1265 30.7977 13.2461 30.3483 13.2461C29.8989 13.2461 29.4576 13.1265 29.0697 12.8997C28.2254 12.4261 27.2735 12.1773 26.3055 12.1773C25.3374 12.1773 24.3855 12.4261 23.5412 12.8997C23.1492 13.1275 22.7038 13.2474 22.2504 13.2474C21.797 13.2474 21.3516 13.1275 20.9596 12.8997C20.1153 12.4261 19.1634 12.1773 18.1953 12.1773C17.2273 12.1773 16.2754 12.4261 15.4311 12.8997C15.0432 13.1265 14.6019 13.2461 14.1525 13.2461C13.7031 13.2461 13.2618 13.1265 12.8739 12.8997C12.4921 12.6675 12.0831 12.4835 11.6561 12.3517C11.5026 12.3069 11.3418 12.2928 11.1828 12.3102C11.0238 12.3276 10.8698 12.3761 10.7296 12.453C10.5894 12.5299 10.4657 12.6336 10.3656 12.7583C10.2655 12.883 10.1909 13.0262 10.1461 13.1798C10.1014 13.3333 10.0873 13.4941 10.1046 13.6531C10.122 13.812 10.1705 13.966 10.2474 14.1062C10.3243 14.2465 10.4281 14.3702 10.5528 14.4703C10.6775 14.5704 10.8207 14.645 10.9742 14.6897C11.2123 14.7597 11.4413 14.8578 11.6561 14.982C12.4109 15.4325 13.2735 15.6703 14.1525 15.6703C15.0315 15.6703 15.8941 15.4325 16.6488 14.982C17.1243 14.7131 17.6613 14.5717 18.2075 14.5717C18.7538 14.5717 19.2907 14.7131 19.7662 14.982C20.5301 15.4188 21.3948 15.6486 22.2748 15.6486C23.1547 15.6486 24.0194 15.4188 24.7833 14.982C25.2588 14.7131 25.7957 14.5717 26.342 14.5717C26.8882 14.5717 27.4252 14.7131 27.9007 14.982C28.6724 15.4231 29.5447 15.6579 30.4336 15.6639C31.2923 15.6622 32.1343 15.4264 32.869 14.982C33.0839 14.8578 33.3128 14.7597 33.551 14.6897C33.861 14.5993 34.1224 14.3894 34.2777 14.1062C34.433 13.8231 34.4695 13.4898 34.379 13.1798C34.2886 12.8697 34.0787 12.6083 33.7955 12.453C33.5123 12.2977 33.1791 12.2613 32.869 12.3517H32.8447ZM32.8447 6.26303C32.4177 6.39479 32.0087 6.57884 31.6269 6.81101C31.239 7.03787 30.7977 7.15743 30.3483 7.15743C29.8989 7.15743 29.4576 7.03787 29.0697 6.81101C28.2254 6.3374 27.2735 6.08867 26.3055 6.08867C25.3374 6.08867 24.3855 6.3374 23.5412 6.81101C23.1492 7.03879 22.7038 7.15877 22.2504 7.15877C21.797 7.15877 21.3516 7.03879 20.9596 6.81101C20.1153 6.3374 19.1634 6.08867 18.1953 6.08867C17.2273 6.08867 16.2754 6.3374 15.4311 6.81101C15.0432 7.03787 14.6019 7.15743 14.1525 7.15743C13.7031 7.15743 13.2618 7.03787 12.8739 6.81101C12.4921 6.57884 12.0831 6.39479 11.6561 6.26303C11.4967 6.20283 11.3264 6.17678 11.1562 6.18654C10.9861 6.19631 10.8199 6.24169 10.6683 6.31974C10.5168 6.39779 10.3834 6.50678 10.2767 6.63965C10.1699 6.77252 10.0923 6.92632 10.0487 7.09109C10.0039 7.24461 9.98983 7.40544 10.0072 7.56441C10.0246 7.72338 10.0731 7.87736 10.15 8.01758C10.2269 8.1578 10.3307 8.28149 10.4554 8.38161C10.5801 8.48173 10.7232 8.5563 10.8768 8.60108C11.1149 8.671 11.3438 8.76912 11.5587 8.89333C12.3135 9.34381 13.1761 9.58166 14.0551 9.58166C14.934 9.58166 15.7966 9.34381 16.5514 8.89333C17.0269 8.62441 17.5638 8.48307 18.1101 8.48307C18.6564 8.48307 19.1933 8.62441 19.6688 8.89333C20.4327 9.33013 21.2974 9.55989 22.1773 9.55989C23.0573 9.55989 23.922 9.33013 24.6859 8.89333C25.1613 8.62441 25.6983 8.48307 26.2446 8.48307C26.7908 8.48307 27.3278 8.62441 27.8033 8.89333C28.575 9.33438 29.4473 9.56924 30.3361 9.57526C31.1949 9.57349 32.0368 9.33774 32.7716 8.89333C32.9865 8.76912 33.2154 8.671 33.4535 8.60108C33.7636 8.51065 34.025 8.30076 34.1803 8.01758C34.3356 7.7344 34.372 7.40113 34.2816 7.09109C34.1912 6.78104 33.9813 6.51962 33.6981 6.36433C33.4149 6.20904 33.0817 6.1726 32.7716 6.26303H32.8447Z"
                          fill="white"
                        ></path>{" "}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info-wrap">
                <h5>Instant Hot Water</h5>
                <p>
                  Food grade water tap provides hot water within 3 seconds from
                  luke warm to very hot.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 pb-4">
            <div className="bg-gray-100 card-wrap mt-10 sm:mt-0 p-4 sm:p-6 md:p-6 lg:p-2 lg:px-4 xl:p-6 rounded-lg shadow-lg">
              <div className="experience-element borderexperience-widget__width-initial ml-4 experience-view-default experience-widget exp-icon-three  ">
                <div className="experience-widget-container p-6">
                  <div className="experience-icon-wrapper text-center">
                    <div className="experience-icon pt-2">
                      <img
                        width="44"
                        height="74"
                        loading="lazy"
                        src="data:image/png;base64,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"
                        alt="path"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info-wrap">
                <h5>Automatic Leakage Detection</h5>
                <p className="leading-relaxed text-base">
                  Our advanced sensors can quickly detect leakage or spillage of
                  water.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full px-4 pb-4">
            <div className="bg-gray-100 card-wrap mt-10 sm:mt-0 p-4 sm:p-6 md:p-6 lg:p-2 lg:px-4 xl:p-6 rounded-lg shadow-lg">
              <div className="experience-element borderexperience-widget__width-initial ml-4 experience-view-default experience-widget exp-icon-four  top-5">
                <div className="experience-widget-container p-6">
                  <div className="experience-icon-wrapper text-center">
                    <div className="experience-icon ">
                    <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-far-square"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info-wrap max-w-full">
                <h5>Ultimate Space Saver</h5>
                <p className="leading-relaxed text-base">
                  Our under sink water purifier is perfect for saving countertop
                  space making it ideal even for small kitchens.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-full px-4 pb-4">
            <div className="bg-gray-100 card-wrap mt-10 sm:mt-0 p-4 sm:p-6 md:p-6 lg:p-2 lg:px-4 xl:p-6 rounded-lg shadow-lg">
              <div className="experience-element experience-widget__width-initial ml-4 experience-view-default experience-widget experience-widget-icon  rounded-full shadow-md  exp-icon-four">
                <div className="experience-widget-container p-6">
                  <div className="experience-icon-wrapper text-center">
                    <div className="experience-icon">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg e-far-square"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-info-wrap max-w-full">
                <h5>Ultimate Space Saver</h5>
                <p className="leading-relaxed text-base">
                  Our under sink water purifier is perfect for saving countertop
                  space making it ideal even for small kitchens.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

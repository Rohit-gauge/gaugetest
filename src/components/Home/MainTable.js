import React from "react";
import Table from "./Table";

const MainTable = () => {
  return (
    <section className="text-gray-600 body-font main-table-wrap mt-0 ">
      <div className="container mx-auto flex lg:px-28   xl:flex-row flex-col items-center sm:items-center  px-4 lg:pt-20 lg:pb-12  pt-24  ">
        <div className="rt-retina-image-container md:6/2 hidden xl:block">
          {" "}
        </div>

        <div className="lg:flex-grow md:w-6/2 lg:w-full w-90  md:pl-10 flex flex-col md:items-start md:text-left  text-start health-main-wrap md:pr-12 lg:mt-0  ">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default MainTable;

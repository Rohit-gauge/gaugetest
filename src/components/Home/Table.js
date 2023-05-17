import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = ({ scrollToNextSection }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/compare-tables`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          maxBodyLength: Infinity,
        });
        setTableData(response.data.data);
      } catch (error) {
        // console.log(error);
      }
    };

    fetchTableData();
  }, []);

  return (
    <>
      {tableData.length > 0 ? (
        <div className="flex justify-center mb-20 sm:mb-10 lg:w-full lg:text-center flex-col ">
          <div className="gauge-title py-0 pb-8  px-0 pb-30 text-gray-900 text-2xl lg:text-3xl font-bold leading-1.2 text-center capitalize">
            Gauge vs. other Purifiers
          </div>
          <div className="overflow-x-auto lg:shadow-md shadow-sm lg:w-full ">
            <table className="table-custom min-w-full max divide-y divide-gray-200 width-table  ">
              <thead>
                <tr className="bg-gray-100">
                  <th className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider z-ten">
                    Features
                  </th>
                  <th className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider z-ten">
                    Gauge
                  </th>
                  <th className="sticky top-0 px-5 py-3 border-b-2 border-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider z-ten">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-4 whitespace-nowrap up">
                      <div className="uppercase">
                        {item.attributes.features}
                      </div>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap gauge">
                      <div className="text-sm text-gray-900">
                        {item.attributes.gauge}
                      </div>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.attributes.others}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={scrollToNextSection}
            className="rt-arrow-btn rounded-full bg-blue-500 w-fit  lg:px-12 px-10 lg:py-5 py-5 flex m-auto lg:mt-14 mt-12 mb-4 sm:mb-0"
          >
            <a
              href="#affordable"
              rel="nofollow"
              className="rt-readmore-btn text-white font-bold"
            >
              Next: Pricing
            </a>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Table;

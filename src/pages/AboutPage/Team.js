import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_API_URL}/api/teams?populate=*`,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "content-Type": "application/json",
          },
        };
        const response = await axios.request(config);
        setTeamData(response.data.data);
      } catch (error) {
        
      }
    }

    fetchTeamData();
  }, []);

  return (
    <div className="main-team-wrap">
      {teamData && teamData.length > 0 ? (
        <div className="container  mx-auto py-8 lg:px-8 xl:px-0">
          <div className="flex flex-col text-center gap-4 mb-8 p-4">
            <div className="text-red-500 text-lg font-bold">Our Team</div>
            <div className="text-gray-900 text-3xl md:text-4xl font-bold">
              Some of the people you'll be working with
            </div>
            <div className="text-gray-500 md:text-lg">
              Our team is 100% remote, spread out across the globe. Join us!
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 p-4">
            {teamData &&
              teamData.map((item) => (
                <div key={item.id} className="card">
                  {item.attributes.profileimg.data && (
                    <img
                      src={`${process.env.REACT_APP_API_URL}${item.attributes.profileimg.data.attributes.url}`}
                      alt={item.attributes.title}
                      className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110"
                    />
                  )}
                  <div className="text-gray-900 text-lg font-bold title">
                    {item.attributes.title}
                  </div>
                  <div className="text-blue-500 ">
                    {item.attributes.desgination}
                  </div>
                  <Link to={item.attributes.socialLink}>
                    <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-500">
                      <FaLinkedin
                        className="text-blue-900 cursor-pointer transition duration-200 hover:text-blue-900"
                        size={32}
                      />
                    </div>
                  </Link>
                </div>
              ))}

          </div>
        </div>
      ) : (
        <div >
          
        </div>
      )}
    </div>
  );
};

export default Team;

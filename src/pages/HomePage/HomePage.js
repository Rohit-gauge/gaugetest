import React from "react";
import "../../assets/css/homepage.css"
import Affordable from "../../components/Home/Affordable";
import CustomerNeed from "../../components/Home/CustomerNeed";
import Experience from "../../components/Home/Experience";
import Faq from "../../components/Home/Faq";
import Gurantee from "../../components/Home/Gurantee";
import HealthAbove from "../../components/Home/HealthAbove";
import Landing from "../../components/Home/Landing";
import MainTable from "../../components/Home/MainTable";
import PureWater from "../../components/Home/PureWater";


const HomePage = () => {
  return (
    <div>
      <Landing />
      <CustomerNeed />
      <PureWater />
      <Gurantee />
      <HealthAbove />
      <Experience />
      <MainTable />
      <Affordable />
      <Faq />
    </div>
  );
};

export default HomePage;

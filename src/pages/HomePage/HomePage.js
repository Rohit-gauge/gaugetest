import React, { lazy, Suspense } from "react";
import "../../assets/css/homepage.css";
import Landing from "../../components/Home/Landing";

const Affordable = lazy(() => import("../../components/Home/Affordable"));
const CustomerNeed = lazy(() => import("../../components/Home/CustomerNeed"));
const Experience = lazy(() => import("../../components/Home/Experience"));
const Faq = lazy(() => import("../../components/Home/Faq"));
const Gurantee = lazy(() => import("../../components/Home/Gurantee"));
const HealthAbove = lazy(() => import("../../components/Home/HealthAbove"));
const MainTable = lazy(() => import("../../components/Home/MainTable"));
const PureWater = lazy(() => import("../../components/Home/PureWater"));

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Suspense fallback={null}>
        <CustomerNeed />
        <PureWater />
        <Gurantee />
        <HealthAbove />
        <Experience />
        <MainTable />
        <Affordable />
        <Faq />
      </Suspense>
    </div>
  );
};

export default HomePage;

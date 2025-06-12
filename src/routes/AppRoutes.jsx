import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import Employers from "../pages/Employers";
import Partners from "../pages/Partners";
import Solutions from "../pages/Solutions";
import RecruitmentAd from "../pages/RecruitmentAd";
import TalentMarketplace from "../pages/TalentMarketplace";
import GetDemo from "../pages/GetDemo";
import Loader from "../components/common/Loader";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // show for 1.5 seconds
    return () => clearTimeout(timer);
  }, [location]);
  return loading ? (
  <Loader />
) : (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Main Pages */}
      <Route path="" element={<Employers />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route
        path="/employers/recruitment-advertising"
        element={<RecruitmentAd />}
      />
      <Route
        path="/employers/talent-marketplace"
        element={<TalentMarketplace />}
      />
      <Route path="/demo" element={<GetDemo />} />
      <Route path="/partners" element={<Partners />} />
    </Route>
  </Routes>
);
};

export default AppRoutes;

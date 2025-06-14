import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    // Smooth scroll to the top of the page on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]); // Trigger whenever the route changes

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

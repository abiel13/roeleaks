import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[120vh] bg-[#2e2e2e] relative">
      <Navbar />
      {/* main content seperated from footer by giving it a negative footer height as margin */}

      <div className="w-full min-h-screen mb-[17vh] mt-[1rem] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

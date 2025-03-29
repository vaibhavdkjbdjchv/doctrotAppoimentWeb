import React from "react";
import AdminNavbar from "./AdminNavbar";
import PageContent from "./PageContent";

function Dashboard() {
  return (
    <div className="w-screen bg-[#f8f9fd] h-screen">
      <div className="w-full h-[7%]">
        <AdminNavbar />
      </div>
      <div className="w-[30%] h-[93%] bg-white">
        <PageContent />
      </div>
    </div>
  );
}

export default Dashboard;

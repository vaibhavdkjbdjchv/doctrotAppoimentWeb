import React from "react";
import logo from "../../src/Assets/Images/logo.png"
function AdminNavbar() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white flex justify-between items-center px-10 py-5">
        <div className="flex w-[50%] gap-5 items-center">
          <img src={logo} alt="" className=" max-h-10" />
          <div>
            <div className="flex items-center gap-5">
              <h1 className="text-3xl font-bold text-[#0e1258]">Prescopto</h1>
              <h1 className="border rounded-3xl px-5 font-sans text-sm font-semibold text-gray-500">
                Admin
              </h1>
            </div>

            <h2 className="text-[11px]">Dasboard Panel</h2>
          </div>
        </div>
        <div className="w-[50%] flex justify-end px-5">
          <button className="bg-[#5c74fc] text-white px-10 py-2 text-lg font-bold rounded-3xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;

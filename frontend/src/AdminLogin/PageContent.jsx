import React from "react";



function PageContent() {
  function AddDoctor(){
    navigator
  }

  return (
    <div className="w-full">
      <div>
        <ul>
          <li className="text-black">Dashboard</li>
          <li className="text-black">Appoinment</li>
          <li onClick={AddDoctor} className="text-black">AddDoctor</li>
          <li  className="text-black">Dashboard</li>
        </ul>
      </div>
    </div>
  );
}

export default PageContent;

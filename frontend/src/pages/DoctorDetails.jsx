// pages/DoctorDetails.jsx
import { useLocation } from "react-router-dom";
import vector from "/public/Assets/Images/vector.png";
import Navbar from "../../components/Navbar";
import Slots from "../../components/Slots";
import TimeSlots from "../../components/Timeslots";

const DoctorDetails = () => {
  const { state: doctor } = useLocation();
  if (!doctor) return <p>Doctor not found 😞</p>;
  console.log(doctor);
  return (
    <div className="w-screen h-screen fontUse ">
      <Navbar />
      <div className="w-full  h-full flex flex-col items-center justify-center">
        <div className="w-[80%]  h-[50%] px-5 py-10 flex justify-start gap-10 items-center ">
          <div className="w-[23%] overflow-hidden h-[85%] flex justify-center bg-[#5F6FFF] rounded-2xl items-end">
            <img
              src={`http://localhost:5000/uploads/${doctor.profilePhoto}`}
              alt={doctor.name}
              className="h-[85%]"
            />
          </div>
          <div className="w-[70%] border-gray-600 border rounded-2xl h-[85%] flex flex-col gap-2 px-5 py-10 justify-start items-start">
            <h1 className="text-3xl font-bold flex items-center gap-2 mt-4">
              Dr. {doctor.name} <img src={vector} alt="verified" />
            </h1>
            <div className="flex gap-2 justify-center items-center text-lg font-light text-[#4B5563]">
              <p className="">{doctor.specialization}</p>-
              <p>{doctor.education}</p>
              <p className="border px-7 rounded-3xl">
                {doctor.experience} Years
              </p>
            </div>
            <div className="py-2">
              {" "}
              <h3 className="font-semibold text-lg">
                About{" "}
                <span className="border-1 rounded-full text-sm px-2 py-0.5">
                  !
                </span>
              </h3>
              <p className="text-[#4B5563] text-lg">
                {doctor.about ? doctor.about : "No about info provided."}
              </p>
            </div>

            <h1 className="py-5 text-2xl font-bold">
              <span className="text-[#4B5563] font-normal">
                Appointment fee :{" "}
              </span>
              ₹{doctor.fees}
            </h1>
          </div>
        </div>
        <div className="w-[80%] h-full flex justify-end">
          <div className="w-[74%] h-100 ">
            <h1 className="text-2xl text-[#565656] font-bold fontUse">
              Booking Slot
            </h1>
            <div className="w-full flex flex-col items-center justify-center">
              {/* <Slots /> */}
              <TimeSlots />
              <button className="bg-[#5F6FFF] text-white px-20 py-3 hover:bg-transparent hover:border cursor-pointer border-[#5F6FFF]  duration-500 hover:text-[#5F6FFF] rounded-4xl"  >Book an appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

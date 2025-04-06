import React, { useState } from "react";

// 🔁 Generate the current week (7 days)
const getCurrentWeek = () => {
  const today = new Date();
  const week = [];

  const firstDay = today.getDate() - today.getDay(); // Sunday

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(firstDay + i);

    const label = day.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    });
    const value = day.toISOString().split("T")[0]; // yyyy-mm-dd format
    week.push({ label, value });
  }

  return week;
};

// ⏰ Time slots (customize as needed)
const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

const DoctorSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const week = getCurrentWeek();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="w-[90%]  bg-white flex flex-col items-center py-10 px-4">
      {/* Date Pills */}
      <div className="w-full  flex flex-wrap justify-between gap-4 mb-8">
        {week.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(day.value)}
            className={`px-4 py-2 text-lg rounded-full cursor-pointer  border transition-all ${
              selectedDate === day.value
                ? "bg-blue-500 text-white border-blue-500"
                : "text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {selectedDate && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Select Time Slot for{" "}
            <span className="text-blue-600 font-bold">
              {new Date(selectedDate).toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
              })}
            </span>
          </h2>

          {/* Time Slot Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelect(slot)}
                className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
                  selectedTime === slot
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-gray-700 border-gray-300 hover:bg-blue-100"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Selection Result */}
      {selectedTime && (
        <div className="mt-10 text-lg text-green-600">
          ✅ You selected <span className="font-semibold">{selectedTime}</span>{" "}
          on{" "}
          <span className="font-semibold">
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default DoctorSlots;

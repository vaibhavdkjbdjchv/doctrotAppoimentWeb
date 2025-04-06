import React from "react";

const getCurrentWeek = () => {
  const current = new Date();
  const week = [];

  const first = current.getDate() - current.getDay(); // Start from Sunday

  for (let i = 0; i < 7; i++) {
    const day = new Date(current);
    day.setDate(first + i);

    const dayName = day.toLocaleDateString("en-US", { weekday: "short" }); // e.g., Sun, Mon
    const dateOnly = day.getDate().toString().padStart(2, "0"); // "01", "02", etc.

    week.push({ dayName, dateOnly });
  }

  return week;
};

const WeekPage = () => {
  const week = getCurrentWeek();

  return (
    <div className="w-[90%] border py-5">
      <div className="flex  flex-wrap justify-start gap-4">
        {week.map((day, index) => (
          <div
            key={index}
            className="bg-white  cursor-pointer hover:bg-blue-500 duration-400 ease-in hover:text-white p-6 rounded-xl shadow-md w-28 text-center hover:shadow-lg transition"
          >
            <div className="text-sm">{day.dayName}</div>
            <div className="text-2xl font-semibold ">{day.dateOnly}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekPage;

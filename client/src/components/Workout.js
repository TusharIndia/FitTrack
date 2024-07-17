import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    }
  }, [nav]);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-CA");
  };

  const selectedDate = formatDate(date);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://fit-track-api.vercel.app/api/workout/searchbydt",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
              date: selectedDate,
            }),
          }
        );
        const data = await res.json();
        if (data.excercise) {
          setData(data.excercise);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Calendar Section */}
      <div className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white shadow-md rounded-lg items-center">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Workout Calendar
        </h2>
        <Calendar
          onChange={setDate}
          value={date}
          className="border border-gray-300 rounded-lg"
        />
      </div>
      {/* Workout Details Section */}
      <div className="w-full md:w-2/3 p-4 my-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
          Workout for {selectedDate}
        </h2>
        {data.length > 0 ? (
          <div className="space-y-4">
            {data.map((exercise, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-700">
                  {exercise.name}
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium">Reps:</span> {exercise.reps}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Sets:</span> {exercise.sets}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Calories Burned:</span>{" "}
                  {exercise.calorie_burn}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No workouts for this day.</p>
        )}
      </div>
    </div>
  );
};

export default Workout;

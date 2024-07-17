import React, { useState, useEffect } from "react";

const ExerciseCard = ({ name, b_part, sets, reps, calorie_burn }) => (
  <div className="rounded-lg bg-background border border-muted p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-muted-foreground">{b_part}</p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-muted-foreground"
        >
          <path d="m17 2 4 4-4 4"></path>
          <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
          <path d="m7 22-4-4 4-4"></path>
          <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
        </svg>
        <span>
          {sets} sets X {reps} reps
        </span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-muted-foreground"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
        <span>{calorie_burn}</span>
      </div>
    </div>
  </div>
);

const TodayWorkout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fit-track-api.vercel.app/api/workout/today", {
          method: "GET",
          headers: {
            "Content-b_part": "application/json",
            "auth-token": localStorage.getItem("token")
          },
        });
        const data = await res.json();
        setData(data.excercise);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-background rounded-lg border p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Today's Workout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((exercise) => {
            return <ExerciseCard key={exercise._id} {...exercise} />;
          })
        ) : (
            <div className="text-center ">No data Present</div>
        )}
      </div>
    </div>
  );
};

export default TodayWorkout;

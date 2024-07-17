import React, { useEffect,useState } from "react";
import Barchart from "./child_components/Barchart";
import PieChart from "./child_components/Piechart";
import TodayWorkout from "./TodayWorkout";
import AddWorkout from "./AddWorkout";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    }
    if (!localStorage.getItem("token")) {
      return null;
    }
    }, [nav]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://fit-track-api.vercel.app/api/workout/total-calories", {
            method: "GET",
            headers: {
              "Content-b_part": "application/json",
              "auth-token": localStorage.getItem("token")
            },
          });
          const data = await res.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-background rounded-lg border p-6">
        <h2 className="text-2xl font-bold text-center">Dashboard 💪</h2>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6 text-center">
        <h3 className="text-lg font-bold mb-4">Total Days</h3>
        <div className="text-4xl font-bold">{data.uniqueCount}</div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6 text-center">
        <h3 className="text-lg font-bold mb-4">Total Calories</h3>
        <div className="text-4xl font-bold">{data.totalCalories}</div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6 text-center">
        <h3 className="text-lg font-bold mb-4">Average Calories</h3>
        <div className="text-4xl font-bold">{data.averageCal}</div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6">
        <div className="flex items-center justify-between mb-4 flex-col">
          <h3 className="text-lg font-bold">Weekly Calories Burnt</h3>
          <Barchart />
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6">
        <h3 className="text-lg font-bold text-center mb-4">
          Workout Regime Body Part
        </h3>
        <PieChart />
      </div>
      <AddWorkout />
      <TodayWorkout />
    </div>
  );
};

export default Dashboard;

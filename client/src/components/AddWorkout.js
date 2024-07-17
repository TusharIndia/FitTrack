import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddWorkout = () => {
  const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const red = useNavigate();
  const [exercises, setExercises] = useState([
    { name: "", b_part: "", sets: 0, reps: 0, calorie_burn: 0 },
  ]);

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([
      ...exercises,
      { name: "", b_part: "", sets: 0, reps: 0, calorie_burn: 0 },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    {console.log(localStorage.getItem("token"))}
    let res = await fetch("https://fit-track-api.vercel.app/api/workout/addworkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        exercises: exercises,
        date: date
      }),
    });
    res = await res.json();
    if(res.success){
      red('/')
      setIsOpen(false);
    }
  };

  return (
    <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-background rounded-lg border p-6">
      <h3 className="text-lg font-bold mb-4 text-center">Add Workout</h3>
      <div className="flex flex-col space-y-5">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex h-96 items-center bg-gray-200 hover:bg-gray-400 text-white hover:shadow-lg justify-center whitespace-nowrap text-9xl m-7 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3"
        >
          +
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 overflow-auto h-[40rem]">
            <h2 className="text-2xl mb-4">Add Workout</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {exercises.map((exercise, index) => (
                <div key={index} className="mb-4 border-t pt-4">
                  <h3 className="text-xl mb-2">Exercise {index + 1}</h3>
                  <div className="mb-2">
                    <label className="block text-gray-700">Exercise Name</label>
                    <input
                      type="text"
                      value={exercise.name}
                      onChange={(e) =>
                        handleExerciseChange(index, "name", e.target.value)
                      }
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Body Part</label>
                    <input
                      type="text"
                      value={exercise.b_part}
                      onChange={(e) =>
                        handleExerciseChange(index, "b_part", e.target.value)
                      }
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Sets</label>
                    <input
                      type="number"
                      value={exercise.sets}
                      onChange={(e) =>
                        handleExerciseChange(index, "sets", e.target.value)
                      }
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Reps</label>
                    <input
                      type="number"
                      value={exercise.reps}
                      onChange={(e) =>
                        handleExerciseChange(index, "reps", e.target.value)
                      }
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">
                      Calories Burned
                    </label>
                    <input
                      type="number"
                      value={exercise.calorie_burn}
                      onChange={(e) =>
                        handleExerciseChange(
                          index,
                          "calorie_burn",
                          e.target.value
                        )
                      }
                      className="w-full mt-2 p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  onClick={addExercise}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Another Exercise
                </button>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Save Workout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWorkout;

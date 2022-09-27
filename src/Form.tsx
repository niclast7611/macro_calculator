import { useState } from "react";
import Results from "./Results";

export default function Form() {
  //State is hydrated through form UI
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0);
  const [goal, setGoal] = useState("");

  // State is hydrated by the two functions below
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);

  // returns void because it is not actually returning anything
  const handleSubmit = (): void => {
    if (goal === "lose") {
      setCalories(weight * activity * 0.8);
    } else if (goal === "gain") {
      setCalories(weight * activity * 0.2 + weight * activity);
    } else {
      setCalories(weight * activity);
    }

    setMacros(calories);
  };

  const setMacros = (calories: number): void => {
    if (calories) {
      if (goal === "lose") {
        setProtein(weight);
        setCarbs(Math.round(calories - (protein * 4 + fat * 9)) / 4);
        setFat(Math.round(weight * 0.3));
      } else if (goal === "gain") {
        setProtein(Math.round((calories * 0.4) / 4));
        setCarbs(Math.round((calories * 0.25) / 4));
        setFat(Math.round((calories * 0.35) / 9));
      } else {
        setProtein(Math.round((calories * 0.4) / 4));
        setCarbs(Math.round((calories * 0.4) / 4));
        setFat(Math.round((calories * 0.2) / 9));
      }
    }
  };

  return (
    <div className="max-w-3xl py-6 mx-auto sm:px-6 lg:px-8">
      <form className="px-8 pt-6 pb-6 mb-2 bg-white rounded shadow-md">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="weight" className="block font-medium text-gray-900">
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            autoComplete="given-name"
            className="block w-1/3 my-1 border-gray-300 rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Pounds"
          />
        </div>
        <fieldset>
          <legend className="text-base font-medium text-gray-900 contents">
            Goal
          </legend>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="maintenance"
                name="goal-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="maintain"
                onChange={(e) => setGoal(e.target.value)}
              />
              <label
                htmlFor="maintenance"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Maintain Current Weight
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="gain"
                name="goal-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="lose"
                onChange={(e) => setGoal(e.target.value)}
              />
              <label
                htmlFor="gain"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Gain Weight
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lose"
                name="goal-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label
                htmlFor="lose"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Lose Weight
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-base font-medium text-gray-900 contents">
            Activity Level
          </legend>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                id="maintenance"
                name="activity-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="10"
                onChange={(e) => setActivity(Number(e.target.value))}
              />
              <label
                htmlFor="maintenance"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Sedentary (Little or no exercise)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="gain"
                name="activity-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="12"
                onChange={(e) => setActivity(Number(e.target.value))}
              />
              <label
                htmlFor="gain"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Lightly active (Light exercise/sports 3-5 days a week)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lose"
                name="activity-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="14"
                onChange={(e) => setActivity(Number(e.target.value))}
              />
              <label
                htmlFor="lose"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Moderately active (Moderate exercise/sports 3-5 days a week)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lose"
                name="activity-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="16"
                onChange={(e) => setActivity(Number(e.target.value))}
              />
              <label
                htmlFor="lose"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Active (Hard exercise/sports 6-7 days a week)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lose"
                name="activity-options"
                type="radio"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                value="18"
                onChange={(e) => setActivity(Number(e.target.value))}
              />
              <label
                htmlFor="lose"
                className="block ml-3 text-sm font-medium text-gray-700"
              >
                Very active (Hard exercise/sports 6-7 days a week, plus physical
                job)
              </label>
            </div>
          </div>
        </fieldset>
        <button
          type="button"
          className="flex justify-center px-4 py-2 mx-auto mt-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </form>
      {/* Passes the state as props */}
      <Results carbs={carbs} protein={protein} fat={fat} calories={calories} />
    </div>
  );
}

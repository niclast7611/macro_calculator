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
  };

  return (
    <div>
      <h2>Macro Calculator</h2>
      <form>
        <span>Weight</span>
        <div>
          <input
            type="text"
            name="weight"
            placeholder="Pounds"
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <span>Goal</span>
        <div>
          <input
            type="radio"
            name="goal"
            value="maintain"
            onChange={(e) => setGoal(e.target.value)}
          />
          <label htmlFor="macros-goal2">Maintain Current Weight</label>
        </div>
        <div>
          <input
            type="radio"
            name="goal"
            value="lose"
            onChange={(e) => setGoal(e.target.value)}
          />
          <label htmlFor="macros-goal1">Lose Weight</label>
        </div>
        <div>
          <input
            type="radio"
            name="goal"
            value="gain"
            onChange={(e) => setGoal(e.target.value)}
          />
          <label htmlFor="macros-goal3">Gain Weight</label>
        </div>
        <span>Activity Level</span>

        <div>
          <input
            type="radio"
            name="activity"
            value="10"
            onChange={(e) => setActivity(Number(e.target.value))}
          />
          <label htmlFor="macros-activity1">
            Sedentary (Little or no exercise)
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="activity"
            value="12"
            onChange={(e) => setActivity(Number(e.target.value))}
          />
          <label htmlFor="macros-activity2">
            Lightly active (Light exercise/sports 3-5 days a week)
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="activity"
            value="14"
            onChange={(e) => setActivity(Number(e.target.value))}
          />
          <label htmlFor="macros-activity3">
            Moderately active (Moderate exercise/sports 3-5 days a week)
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="activity"
            value="16"
            onChange={(e) => setActivity(Number(e.target.value))}
          />
          <label htmlFor="macros-activity4">
            Active (Hard exercise/sports 6-7 days a week)
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="activity"
            value="18"
            onChange={(e) => setActivity(Number(e.target.value))}
          />
          <label htmlFor="macros-activity5">
            Very active (Hard exercise/sports 6-7 days a week, plus physical
            job)
          </label>
        </div>
        <button type="button" onClick={handleSubmit}>
          Calculate
        </button>
      </form>
      {/* Passes the state as props */}
      <Results carbs={carbs} protein={protein} fat={fat} calories={calories} />
    </div>
  );
}

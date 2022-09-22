import { useState } from "react";

export default function Form() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightIn, setHeightIn] = useState(10);
  const [heightFt, setHeightFt] = useState(5);
  const [activity, setActivity] = useState(0);
  const [goal, setGoal] = useState("");

  const [protein, setProtein] = useState(0);
  const [carbs, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);

  console.log(calories);
  // console.log(carbs);
  // console.log(protein);
  // console.log(fat);
  const handleSubmit = (): void => {
    setCalories(weight * activity);
    if (goal === "lose") {
      setCalories(calories * 0.8);
      setProtein(weight);
      setFat(Math.round((calories * 0.3) / 9));
      setCarb(Math.round((calories * 0.3) / 4));
    }
  };

  return (
    <div>
      <h2>Macro Calculator</h2>
      <form>
        <span>Age</span>
        <div>
          <input
            type="text"
            name="age"
            placeholder="Years"
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <span>Gender</span>
        <div>
          <input
            type="radio"
            name="sex"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="macros-male">Male</label>
          <input
            type="radio"
            name="sex"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="macros-female">Female</label>
        </div>
        <span>Height</span>
        <div>
          <input
            type="text"
            name="height-tens"
            placeholder="Feet"
            onChange={(e) => setHeightFt(Number(e.target.value))}
          />
          <input
            type="text"
            name="height-units"
            placeholder="Inches"
            onChange={(e) => setHeightIn(Number(e.target.value))}
          />
        </div>
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
    </div>
  );
}

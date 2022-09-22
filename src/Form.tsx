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

  const handleSubmit = () => {
    if (gender === "Male") {
      let maleBmr = Math.round(
        66.47 + 6.24 * weight + 12.7 * (heightFt * 12 + heightIn) - 4.7 * age
      );
      setCalories(Math.round(maleBmr * activity));
      if (goal === "maintain") {
        setProtein(Math.round(calories * 0.4));
        setCarb(Math.round(calories * 0.35));
        setFat(Math.round(calories * 0.25));
      } else if (goal === "lose") {
        setProtein(Math.round(calories * 0.5));
        setCarb(Math.round(calories * 0.35));
        setFat(Math.round(calories * 0.15));
      } else {
        setProtein(Math.round(calories * 0.35));
        setCarb(Math.round(calories * 0.45));
        setFat(Math.round(calories * 0.2));
      }
    }
  };
  console.log("protein", Math.round(calories * 0.4));
  // console.log("carbs", carbs);
  // console.log("fat", fat);
  // console.log("calories", calories);

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
            value="1.2"
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
            value="1.375"
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
            value="1.55"
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
            value="1.725"
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
            value="1.9"
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

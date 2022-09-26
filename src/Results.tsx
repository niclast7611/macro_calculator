// Interface created to describe the data types of the props coming in

interface FormProps {
  carbs: number;
  protein: number;
  fat: number;
  calories: number;
}

export default function Results({ carbs, fat, protein, calories }: FormProps) {
  return (
    <div className="flex w-screen text-center flex-roPw justify-evenly">
      <div>
        <h3 className="text-lg border-b-2 border-black ">Protein</h3>
        <br />
        <h4>{protein} grams</h4>
      </div>
      <div>
        <h3 className="text-lg border-b-2 border-black ">Carbs</h3>
        <br />
        <h4>{carbs} grams</h4>
      </div>
      <div>
        <h3 className="text-lg border-b-2 border-black ">Fat</h3>
        <br />
        <h4>{fat} grams</h4>
      </div>
      <div>
        <h3 className="text-lg border-b-2 border-black ">Calories</h3>
        <br />
        <h4>{calories} cal</h4>
      </div>
    </div>
  );
}

import React from "react";

export default function Results() {
  return (
    <div className="flex flex-row w-screen justify-evenly text-center">
      <div>
        <h3 className="border-b-2 border-black text-lg ">Protein</h3>
        <br />
        <h4>40 grams</h4>
      </div>
      <div>
        <h3 className="border-b-2 border-black text-lg ">Carbs</h3>
        <br />
        <h4>40 grams</h4>
      </div>
      <div>
        <h3 className="border-b-2 border-black text-lg ">Fat</h3>
        <br />
        <h4>40 grams</h4>
      </div>
      <div>
        <h3 className="border-b-2 border-black text-lg ">Calories</h3>
        <br />
        <h4>2000 cal</h4>
      </div>
    </div>
  );
}

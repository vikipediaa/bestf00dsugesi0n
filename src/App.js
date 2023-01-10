import "./styles.css";

import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  highcaloriefood: [
    { name: "Butter", rating: "4/5" },
    { name: "Peanut butter", rating: "3.5/5" },
    { name: "Milkshakes", rating: "4.3/5" },
    { name: "Whole milk", rating: "4.5/5" }
  ],

  lowcaloriefood: [
    { name: "Soup ", rating: "4/5" },
    { name: "Oats", rating: "3.5/5" },
    { name: "Berriess", rating: "4.3/5" },
    { name: " Popcorn", rating: "4.5/5" }
  ],
  protinrichfood: [
    { name: "Eggs", rating: "4/5" },
    { name: "Almonds", rating: "3.5/5" },
    { name: " Cottage cheese", rating: "4.3/5" },
    { name: "Greek yogurt", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("protinrichfood");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍔 Best food Option </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout your best suited Option. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

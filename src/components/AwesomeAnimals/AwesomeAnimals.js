// src/components/AwesomeAnimals/AwesomeAnimals.js
import React from "react";

export default function AwesomeAnimals() {
  const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor",
  ];

  return (
    <div>
      {animals.map((animal) => {
        const count = animals.indexOf(animal);
        return (
          <ul className="nav">
            <li>
              Awesomeness level {count}: {animal}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

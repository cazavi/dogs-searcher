import { useState } from "react";
import { AddBreed, DogGrid } from "./dogs/components";

export const DogsApp = () => {
  const [breed, setBreed] = useState(["hound"]); // no usar condicionalmente los hooks

  const onAddBreed = (newBreed) => {
    if (breed.includes(newBreed)) return;
    // console.log(newCategory);
    // categories.push(newCategory);
    // setCategories(cat => [...cat, "Jojo's Bizarre Adventure"]);
    setBreed([newBreed, ...breed]);
  };

  // console.log(categories)

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddBreed
        onNewBreed={onAddBreed}
      />
        {breed.map((breed) => (
          //no usar index como key porque por i react relaciona que elemento se elimina etc
          <DogGrid 
            key={breed}
            breed={breed}
          />
          ))
        }
    </>
  );
};

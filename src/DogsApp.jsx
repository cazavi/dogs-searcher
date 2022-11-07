import { useState } from "react";
import { BreedsList } from "./dogs/components";

export const DogsApp = () => {
  const [breed, setBreed] = useState(["hound"]); // no usar condicionalmente los hooks

  const onAddBreed = (newBreed) => {
    if (breed.includes(newBreed)) return;
    // console.log(newCategory);
    // categories.push(newCategory);
    // setCategories(cat => [...cat, "Jojo's Bizarre Adventure"]);
    setBreed([newBreed]);
  };

  // console.log(categories)

  return (
    <>
    <div className="container bg-primary bg-opacity-25 bg-gradient">
      <div className="row justify-content-center">
      <h1 className="header text-center mt-3">DogsPedia</h1>
{/* <div className="col-3"> */}

{/* </div> */}
{/* <div className="col-12 justify-content-center"> */}
      <BreedsList/>

      {/* <AddBreed
        onNewBreed={onAddBreed}
      /> */}
        {/* {breed.map((breed) => (
          //no usar index como key porque por i react relaciona que elemento se elimina etc
          <DogGrid 
            key={breed}
            breed={breed}
          />
          ))
        } */}
{/* </div> */}
</div>
      </div>

    </>
  );
};

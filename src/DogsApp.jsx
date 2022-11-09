import { useState } from "react";
import { BreedsList } from "./dogs/components";
import logo from "./public/logo.png";

export const DogsApp = () => {
  // const [breed, setBreed] = useState(["hound"]); // no usar condicionalmente los hooks

  // const onAddBreed = (newBreed) => {
  //   if (breed.includes(newBreed)) return;
  //   // console.log(newCategory);
  //   // categories.push(newCategory);
  //   // setCategories(cat => [...cat, "Jojo's Bizarre Adventure"]);
  //   setBreed([newBreed]);
  // };

  // console.log(categories)

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <img src={logo} className="img-fluid w-100" />
          </div>
          <BreedsList />
        </div>
      </div>
    </>
  );
};

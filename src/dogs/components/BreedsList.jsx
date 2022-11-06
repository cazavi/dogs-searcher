import { useState, useEffect } from "react";
import { AddBreed, DogGrid } from ".";
import { getAllBreeds } from "../helpers/getAllBreeds";

export const BreedsList = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks

  const getBreeds = async() => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
  }
console.log(breed)
  useEffect(() => {
    getBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  return (
    <>
      <h4>Select a breed</h4>
      <select className="col-3">
        {
          Object.keys(breed).map((dog,index) => (
            // <ul>
              <option className="btn btn-light">{dog}</option>
            // </ul>
          ))
        }
      </select>
    </>
  );
  };


  // console.log(categories)


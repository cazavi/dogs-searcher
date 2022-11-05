import { useState, useEffect } from "react";
import { AddBreed, DogGrid } from "./dogs/components";
import { getAllBreeds } from "./dogs/helpers/getAllBreeds";

export const Home = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks
  const [isLoading, setIsLoading] = useState(true);

  const getBreeds = async() => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
    setIsLoading(false);
  }
console.log(breed)
  useEffect(() => {
    getBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  return (
    <>
      <h1>Dogs Breeds Searcher</h1>
      <div className="col-3">
        {
          Object.keys(breed).map((dog) => (
            <ul>{dog}</ul>
          ))
        }
      </div>
    </>
  );
  };


  // console.log(categories)


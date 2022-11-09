import { useState, useEffect } from "react";
import { SubBreedSelect } from ".";
import { getAllBreeds, getSubBreeds } from "../helpers";
import { DogGrid } from "./DogGrid";

export const BreedsList = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks
  // const [subBreed, setSubBreed] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(["pug"]);

  const getBreeds = async () => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
  };
  const fetchBreeds = Object.keys(breed);

  // console.log(subBreed)

  const handleChangeBreed = ({ target }) => {
    setSelectedBreed(target.value);
    // setBreed(target.value)
    console.log("SELECCIONASTE RAZA:", target.value);
    // console.log(, selectedBreed)
  };

  // const fetchSubBreeds = async () => {
  //   // const {pics} = getSubBreeds(breed)
  //   const pics = await getSubBreeds();

  //   // console.log("SUBBREED", pics);
  //   console.log(pics);
  //   setSubBreed(pics);
  // };
  // console.log("SUBRAZA",subBreed)

  // const handleChangeSubBreed = ({target}) => {
  //   // setSelectedBreed(target.value)
  //   // subBreed(selectedBreed)
  //   console.log("SELECCIONASTE SUB-RAZA:", target.value);
  //   // console.log(, selectedBreed)
  // };

  useEffect(() => {
    getBreeds();
    // fetchSubBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);
  return (
    <>
      <div className="container">
        <div className=" row d-flex justify-content-center m-0">
          <div className="col-sm-auto col-12 p-0 d-flex justify-content-center">
            <label className="col-form-label mt-2">
              <small>Select your favorite dog</small>
            </label>
          </div>
          <div className="col-sm-auto p-0 col-12 d-flex justify-content-center">
            <select
              id="breedSelect"
              onChange={handleChangeBreed}
              className="bg-danger bg-gradient bg-opacity-50 form-select-sm m-3"
            >
              <option defaultValue>Choose a breed</option>
              {fetchBreeds.map((dog, index) => (
                <option value={dog} key={index}>
                  {dog}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-auto p-0 col-12 d-flex justify-content-center m-0">
          <SubBreedSelect key={selectedBreed} breed={selectedBreed} />
        </div>
      </div>
    </>
  );
};

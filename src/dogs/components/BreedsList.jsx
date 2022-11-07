import { useState, useEffect } from "react";
import { DogGrid } from ".";
import { getAllBreeds, getSubBreeds } from "../helpers";

export const BreedsList = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks
  const [subBreed, setSubBreed] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(['pug']);

  const getBreeds = async () => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
  };
  const fetchBreeds = Object.keys(breed);

  const fetchSubBreeds = async () => {
    // const {pics} = getSubBreeds(breed)
    const pics = await getSubBreeds();
    console.log(pics);
    console.log("SUBBREED", pics);
    setSubBreed(pics);
  };

  // console.log(subBreed)
  useEffect(() => {
    getBreeds();
    fetchSubBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  const handleChangeBreed = ({ target }) => {
    setSelectedBreed(target.value);
    // setBreed(target.value)
    console.log("SELECCIONASTE RAZA:", target.value);
    // console.log(, selectedBreed)
  };

  const handleChangeSubBreed = ({ target }) => {
    // setSelectedBreed(target.value)
    console.log("SELECCIONASTE SUB-RAZA:", target.value);
    // console.log(, selectedBreed)
  };

  return (
    <>
      <div className="container">
        <div className="form-group row d-flex justify-content-center">
          <div className="col-sm-auto col-12 d-flex justify-content-center">
            <label className="col-form-label mt-2">
              Select your favorite dog
            </label>
          </div>
          <div className="col-sm-auto col-6 d-flex justify-content-center">
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
          <div className="col-sm-auto col-6 d-flex justify-content-center">
            <select
              onChange={handleChangeSubBreed}
              className=" bg-danger bg-gradient bg-opacity-50 form-select-sm m-3"
            >
              <option defaultValue>Choose a sub-breed</option>

              {subBreed.map((dogs, index) => (
                <option value={dogs} key={index}>
                  {dogs}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-auto">
          <DogGrid key={selectedBreed} breed={selectedBreed} />
        </div>
      </div>
    </>
  );
};
import { useState, useEffect } from "react";
import { DogGrid } from ".";
import { getAllBreeds } from "..";

export const BreedSelect = () => {
  const [breed, setBreed] = useState({});
  const [selectedBreed, setSelectedBreed] = useState(["pug"]);

  const getBreeds = async () => {
    const data = await getAllBreeds();
    setBreed(data);
  };
  
  const breedsKeys = Object.keys(breed);

  const handleChangeBreed = ({ target }) => {
    setSelectedBreed(target.value);
    console.log("SELECCIONASTE RAZA:", target.value);
  };

  useEffect(() => {
    getBreeds();
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
              {breedsKeys.map((dog, index) => (
                <option value={dog} key={index}>
                  {dog}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-auto p-0 col-12 d-flex justify-content-center m-0">
          {/* <SubBreedSelect key={selectedBreed} breed={selectedBreed} /> */}
          <DogGrid  key={selectedBreed} breed={selectedBreed} />
        </div>
      </div>
    </>
  );
};

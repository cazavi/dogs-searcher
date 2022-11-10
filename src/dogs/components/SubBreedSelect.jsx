import { useEffect, useState } from "react";
import { getSubBreeds } from "..";
import { DogGrid } from ".";

export const SubBreedSelect = ({ breed }) => {

  const [subBreed, setSubBreed] = useState([breed]);
  const [selectedSubBreed, setSelectedSubBreed] = useState([]);

  const fetchSubBreeds = async () => {
    const subDogs = await getSubBreeds(breed);
    setSubBreed(subDogs);
  };

  const handleChangeSubBreed = ({ target }) => {
    const selected = target.value
    setSelectedSubBreed(selected);
  };

  useEffect(() => {
    fetchSubBreeds();
  }, []);

  return (
    <div className="row d-flex justify-content-center p-0">
      <div className="col-sm-auto p-0 col-12 d-flex justify-content-center">
        <label className="col-form-label mt-2">
          <small>Select a sub-breed</small>
        </label>
      </div>
      <div className="col-sm-auto p-0 col-12 d-flex justify-content-center">
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
      <DogGrid  key={subBreed} breed={breed} subBreed={subBreed} selectedSubBreed={selectedSubBreed} />
    </div>
  );
};

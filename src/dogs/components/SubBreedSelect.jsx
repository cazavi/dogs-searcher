import { useEffect, useState } from "react";
import { getSubBreeds } from "../helpers";
import { DogGrid } from "./DogGrid";

export const SubBreedSelect = ({ breed }) => {
  //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  // const {images, pics, isLoading} = useFetch(breed);
  // console.log("PICS",pics)
  const [subBreed, setSubBreed] = useState([breed]);
  const [selectedSubBreed, setSelectedSubBreed] = useState([]);

  const fetchSubBreeds = async () => {
    // const {pics} = getSubBreeds(breed)
    const pics = await getSubBreeds(breed);

    // console.log("SUBBREED", pics);
    console.log(pics);
    setSubBreed(pics);
  };
  console.log("SUBRAZA", subBreed);

  const handleChangeSubBreed = ({ target }) => {
    // setSelectedBreed(target.value)
    setSelectedSubBreed(target.value);
    console.log("SELECCIONASTE SUB-RAZA:", target.value);
    // console.log(, selectedBreed)
  };

  useEffect(() => {
    // getBreeds();
    fetchSubBreeds();
    // return{} //este retorno es para hacer una limpieza
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
          {selectedSubBreed.map((dogs, index) => (
            <option value={dogs} key={index}>
              {dogs}
            </option>
          ))}
        </select>
      </div>
      <DogGrid breed={breed} subBreed={subBreed} />
    </div>
  );
};

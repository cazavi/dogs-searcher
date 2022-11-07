import { useState, useEffect } from "react";
import { AddBreed, DogGrid } from ".";
import { getAllBreeds, getSubBreeds} from "../helpers";

export const BreedsList = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks
  const [subBreed, setSubBreed] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()

  
  const getBreeds = async() => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
  }
  const fetchBreeds = Object.keys(breed);

  const fetchSubBreeds = async ()=>{
    // const {pics} = getSubBreeds(breed)
    const pics = await getSubBreeds();
    console.log(pics)
    console.log("SUBBREED", pics)
    setSubBreed(pics);
  }

// console.log(subBreed)
  useEffect(() => {
    getBreeds();
    fetchSubBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);


  const handleChangeBreed = ({target}) => {
    // // setSelectedBreed(target.value)
    // setBreed(target.value)
    console.log("SELECCIONASTE RAZA:", target.value)
    // console.log(, selectedBreed)
}

const handleChangeSubBreed = ({target}) => {
  // setSelectedBreed(target.value)
  console.log("SELECCIONASTE SUB-RAZA:", target.value)
  // console.log(, selectedBreed)
}


  return (
    <>
      <h4>Select a breed</h4>
      <div className="row row-cols-2 gap-3 m-2 justify-content-center">
      <select  onChange={handleChangeBreed} className="bg-danger bg-gradient bg-opacity-50 col-sm-3 form-select-sm">
        <option defaultValue>Choose a breed</option>
        {
          fetchBreeds.map((dog,index) => (
            // <ul>
              <option value={dog} key={index}  className="btn btn-light">{dog}</option>
            // </ul>
          ))
        }
      </select>

      <select onChange={handleChangeSubBreed}  className=" bg-danger bg-gradient bg-opacity-50 col-3 form-select-sm">
      <option defaultValue>Choose a sub-breed</option>
        
        {
          subBreed.map((dogs,index) => (
            // <ul>
              <option value={dogs} key={index} className="btn btn-light">{dogs}</option>
            // </ul>
          ))
        }
      </select>

      </div>
    </>
  );
  };


  // console.log(categories)

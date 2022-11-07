import { useState, useEffect } from "react";
import { AddBreed, DogGrid } from ".";
import { getAllBreeds } from "../helpers/getAllBreeds";
import { getSubBreeds } from "../helpers/getSubBreeds";
// import { useForm } from "../hooks/useForm";

export const BreedsList = () => {
  const [breed, setBreed] = useState({}); // no usar condicionalmente los hooks
  const [subBreed, setSubBreed] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()

  

  const getBreeds = async() => {
    const data = await getAllBreeds();
    // const dogs = Object.keys(data)
    setBreed(data);
  }

  const fetchSubBreeds = async ()=>{
    const data = await getSubBreeds();
    // const dogs = Object.keys(data)
    // console.log("SUBBREED", data)
    setSubBreed(data);
  }
console.log(subBreed)
  useEffect(() => {
    getBreeds();
    fetchSubBreeds();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  const handleChange = ({target}) => {
    // setSelectedBreed(target.value)
    console.log("ME SELECCIONASTE", target.value)
    // console.log(, selectedBreed)
}



  return (
    <>
      <h4>Select a breed</h4>
      <div className="row row-cols-2 gap-3 m-2 justify-content-center">
      <select  onChange={handleChange} className="bg-danger bg-gradient bg-opacity-50 col-sm-3 form-select-sm">
        <option selected>Choose a breed</option>
        {
          Object.keys(breed).map((dog,index) => (
            // <ul>
              <option value={dog} key={index}  className="btn btn-light">{dog}</option>
            // </ul>
          ))
        }
      </select>
      <select  className=" bg-danger bg-gradient bg-opacity-50 col-3 form-select-sm">
      <option selected>Choose a sub-breed</option>
        
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

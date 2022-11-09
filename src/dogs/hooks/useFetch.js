import { useEffect, useState } from "react";
// import { getSubBreeds, getSubBreedsImages } from "../helpers";
import { getAllBreeds } from "../helpers/getAllBreeds";
import { getDogsByBreed } from "../helpers/getDogsByBreed";

export const useFetch = (breed) => {

  const [images, setImages]=useState([]);
  // const [pics, setPics]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    try {
      const newImages = await getDogsByBreed(breed);
      setImages(newImages);
      setIsLoading(false);
      
      } catch (error) {
      
      throw new Error (error)
      
      }
  }

// const getSubImages = async() =>{
//   const subImages = await getSubBreedsImages(breed);
//   setPics(subImages)
//   setIsLoading(false);

// }

  useEffect(() => {
    getImages();
    // getSubImages();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  return{
    images,
    // pics,
    isLoading
  }
}

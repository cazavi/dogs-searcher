import { useEffect, useState } from "react";
import { getAllBreeds } from "../helpers/getAllBreeds";
import { getDogsByBreed } from "../helpers/getDogsByBreed";


export const useFetch = (breed) => {

  const [images, setImages]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getDogsByBreed(breed);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
    // return{} //este retorno es para hacer una limpieza
  }, []);

  return{
    images,
    isLoading
  }
}

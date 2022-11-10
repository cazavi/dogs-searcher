import { useEffect, useState } from "react";
import { getDogsByBreed, getSubBreedsImages } from "../helpers";

export const useFetch = (breed, subBreed) => {

  const [images, setImages]=useState([]);
  const [pics, setPics]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Get dog's breeds images
  const getImages = async() => {
      const newImages = await getDogsByBreed(breed);
      setImages(newImages);
      setIsLoading(false);
  }

    //Get dog's sub-breeds images
  const getSubImages = async() =>{
    const subImages = await getSubBreedsImages(breed, subBreed);
    setPics(subImages)
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
    getSubImages();
  }, []);

  return{
    images,
    pics,
    isLoading
  }
}

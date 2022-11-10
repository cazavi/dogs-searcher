import axios from "axios";

export const getDogsByBreed = async(breed) => {
  const url = `https://dog.ceo/api/breed/${breed}/images`;
  const resp = await axios.get(url);
  const images = resp.data.message.map(img => ({
      url:img,
    })
  )
  return images;
};
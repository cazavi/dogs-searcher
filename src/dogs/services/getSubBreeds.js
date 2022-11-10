import axios from "axios";

export const getSubBreeds = async(breed) => {
  const url = `https://dog.ceo/api/breed/${breed}/list`;
  const resp = await axios.get(url);
  const pics = resp.data.message
  return pics;
};


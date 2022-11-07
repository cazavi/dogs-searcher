import axios from "axios";

export const getSubBreeds = async(breed) => {
  const url = `https://dog.ceo/api/breed/${breed}/list`;
  const resp = await axios.get(url);
  console.log(resp)
  // const {data} = await resp.json();
  const pics = resp.data.message
  console.log(pics)
  return pics;
};


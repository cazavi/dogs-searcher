import axios from "axios";

export const getAllBreeds = async() => {    
  const url = `https://dog.ceo/api/breeds/list/all`;
  const resp = await axios.get(url);
  const data = resp.data.message
  return data;
}

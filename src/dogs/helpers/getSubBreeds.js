import axios from "axios";

export const getSubBreeds = async(breed, subBreed) => {
  const url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images`;
  const resp = await axios.get(url);
  console.log(resp)
  // const {data} = await resp.json();
  const images = resp.data.message.map(img => ({
      url:img,
    })
  )
  console.log(images)
  return images;
};


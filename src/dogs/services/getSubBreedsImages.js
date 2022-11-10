import axios from "axios";

export const getSubBreedsImages = async(breed, subBreed) => {
  const url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images`;
  const resp = await axios.get(url);
  const pics = resp.data.message.map(pic => ({
    url:pic,
  })
)
  return pics;
};


import axios from "axios";

export const getAllBreeds = async() => {     //al poner fuera las funciones es una buena práctica porque así react no debe hacer renderizado innecesario de funciones
  const url = `https://dog.ceo/api/breeds/list/all`;
  const resp = await axios.get(url);
  console.log(resp)
  // const {data} = await resp.json();
  const data = resp.data.message
  console.log(data)


  // (img => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url
  //   })
  // )
  return data;
}

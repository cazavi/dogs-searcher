import { useFetch } from "..";
import { DogItem } from ".";
import { Loading } from ".";

export const DogGrid = ({ breed }) => {
  const { images } = useFetch(breed);

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center ">
        <div className="col-3 bg-success bg-opacity-10 border border-success rounded">
          {breed && (
            <h6 className="text-center my-2">
              <small>You selected: {breed}</small>
            </h6>
          )}
        </div>
      </div>
      <Loading breed={breed}/>
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-2 justify-content-center ">
          { 
          //Manejar si vienen imágenes de sub-breed mapear y mostrar
          //sino mostrar las de breed
          // pics ?
          //   (pics.map((pic, url) => (
          //     <DogItem 
          //       className="col" 
          //       key={url} 
          //       {...pic} 
          //     />
          //   )))
          //   : 
            images.map((image, url) => (
              <DogItem
                className="col"
                key={url}
                {...image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

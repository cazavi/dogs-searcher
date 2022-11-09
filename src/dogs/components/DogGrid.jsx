import { useFetch } from "../hooks/useFetch";
import { DogItem } from "./DogItem";
import loading from "../../public/loading.gif";

export const DogGrid = ({ subBreed, breed }) => {
  const { images, isLoading } = useFetch(subBreed);
  // console.log("PICS",pics)

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center ">
        <div className="card col-3 bg-success bg-opacity-50 bg-gradient">
          {breed && (
            <h6 className="text-center my-2">
              <small>You selected: {breed}</small>{" "}
            </h6>
          )}
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        {isLoading && (
          <img src={loading} alt="loading" className="img-fluid w-25" />
        )}
      </div>
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-2 justify-content-center ">
          {
            images.map((pic, url) => (
              <DogItem className="col" key={url} {...pic} />
            ))
            // : (images.map((image, url) => (
            //   <DogItem
            //   className="col"
            //   key={url}
            //   {...image}
            // />
            // )))
          }
        </div>
      </div>
    </div>
  );
};

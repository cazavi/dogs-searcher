import { BreedSelect } from "./dogs";
import logo from "./public/logo.png";

export const DogsApp = () => {

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <img src={logo} className="img-fluid w-100" />
          </div>
          <BreedSelect />
        </div>
      </div>
    </>
  );
};

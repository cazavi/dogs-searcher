import { BreedSelect } from "./dogs";
import { Logo } from "./Logo";


export const DogsApp = () => {

  return (
    <>
      <div className="container">
        <Logo/>
        <BreedSelect />
      </div>
    </>
  );
};

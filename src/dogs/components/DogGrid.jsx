import { DogItem } from './DogItem';
import { useFetch } from '../hooks/useFetch';
import PropTypes from 'prop-types';

export const DogGrid = ({breed}) => { //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  const {images, isLoading} = useFetch(breed);

  return (
    <>
      {
        breed && (<h2>You selected: {breed}</h2>)
      }
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="container">
        <div className="row row-cols-sm-4 row-cols-2 justify-content-center">
          {
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
    </>
  )
}



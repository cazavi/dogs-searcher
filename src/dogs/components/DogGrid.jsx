import { DogItem } from './DogItem';
import { useFetch } from '../hooks/useFetch';
import PropTypes from 'prop-types';

export const DogGrid = ({breed}) => { //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  const {images, isLoading} = useFetch(breed);

  return (
    <>
      {
        breed && (<h4 className='text-center'>You selected: {breed}</h4>)
      }
      {
        isLoading && (<h3>Cargando...</h3>)
      }
      <div className="container">
        <div className="row row-cols-sm-3 row-cols-2 justify-content-center ">
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



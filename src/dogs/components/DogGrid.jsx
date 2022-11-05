import { DogItem } from './DogItem';
import { useFetch } from '../hooks/useFetch';
import PropTypes from 'prop-types';

export const DogGrid = ({breed}) => { //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  const {images, isLoading} = useFetch(breed);

  return (
    <>
      <h3>{breed}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="container">
        <div className="row">

      <div className="col-3">
        {
          images.map((image, url) => (
            <DogItem 
            key={url}
            {...image}    //recibo todas las props del objeto
          />
          ))
        }
      </div>
        </div>

      </div>
    </>
  )
}



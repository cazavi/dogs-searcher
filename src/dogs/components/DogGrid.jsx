import { DogItem } from './DogItem';
import { useFetch } from '../hooks/useFetch';
import PropTypes from 'prop-types';

export const DogGrid = ({breed}) => { //no llamar funciones dentro de componentes porque sino se llamará cada vez que se renderice

  const {images, isLoading} = useFetch(breed);

  return (
    <>
    <div className="row">
<div className="col-12 d-flex justify-content-center ">

    <div className="card col-4 bg-success bg-opacity-50 bg-gradient">
      {
        breed && (<h4 className='text-center my-2'>You selected: {breed}</h4>)
      }

    </div>
    </div>
</div>
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



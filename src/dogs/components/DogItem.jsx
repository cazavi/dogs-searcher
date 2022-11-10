
export const DogItem = ({url}) => {
  return (
      <div className="row ">
        <div className="col mt-2 align-self-center" id="card-img">
        <img className="img-fluid rounded" src={url}  />
        </div>
    </div>
  )
}



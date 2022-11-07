import PropTypes from "prop-types"


export const DogItem = ({url}) => {
  return (
      <div className="row ">
        <div className="col mt-2 align-self-center hover-zoom ">
        <img className="img-fluid rounded w-100" src={url}  />
        </div>
      {/* <p>{title}</p> */}
    </div>
  )
}



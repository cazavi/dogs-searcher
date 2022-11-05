import PropTypes from "prop-types"


export const DogItem = ({url}) => {
  return (
    <div className="container">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
        <img src={url}  />
        </div>
      </div>
      {/* <p>{title}</p> */}
    </div></div>
  )
}



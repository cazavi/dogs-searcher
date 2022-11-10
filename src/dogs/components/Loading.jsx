import React from 'react'
import loading from "../../public/loading.gif";
import { useFetch } from '../hooks';

export const Loading = ({ breed }) => {

  const { isLoading } = useFetch(breed);

  return (
    <div className="col-12 d-flex justify-content-center">
    {isLoading && (
      <img src={loading} alt="loading" className="img-fluid w-25" />
    )}
  </div>
  )
}

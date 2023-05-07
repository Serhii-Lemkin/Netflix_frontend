import "./errorComponent.scss";

import React from 'react'

function ErrorComponent({error}) {
  return (
    <div className="error-container">
        <h3 className="title">Ooops, something went wrong...</h3>
        <p>{error}</p>
    </div>
  )
}

export default ErrorComponent
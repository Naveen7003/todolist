import React from 'react'

const Upper = (props) => {

  return (
    <div>{props.children.toUpperCase()}</div>
  )
}

export default Upper
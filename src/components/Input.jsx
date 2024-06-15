import React from 'react'

const Input = (props) => {
    console.log(props)
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder}  name={props.name}/>
    </div>
  )
}

export default Input
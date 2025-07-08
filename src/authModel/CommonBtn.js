import React from 'react'

const CommonBtn = (props) => {
  return (
    <div>
      <button onClick={props.handleFunction}> {props.text} </button>
    </div>
  )
}

export default CommonBtn

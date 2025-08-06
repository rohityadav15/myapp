import React from 'react'

const ChildA1 = (props) => {
  return (
    <div>
        <h1>ChildA1 component</h1>
        {props.children}
    </div>
  )
}

export default ChildA1
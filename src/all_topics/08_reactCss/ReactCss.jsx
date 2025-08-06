import React from 'react'

const ReactCss = () => {
    const h1Style={
        color:"white",
        backgroundColor:"black",
        boxShadow:"10px 10px 5px black"
    }
  return (
    <div>
        <h1 style={h1Style}>Style  me using in inline</h1>
        <h1 style={{textAlign:"center", backgroundColor:"yellow"}}>
            Hello world
        </h1>
        <button className="primary_btn" >Style me using global CSS</button>
    </div>
  )
}

export default ReactCss
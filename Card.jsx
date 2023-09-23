import React from "react";

const Card = (props) => {

  return (
      <div style={{
        textAlign: 'center',
        alignSelf: 'center',
        border: '1px solid gold',
        borderRadius: '100px',
        color: "green",
    }} className="card">

            <h4>{props.name}</h4>
            <h4>{props.image}</h4>
            <h4>{props.link}</h4>

        </div>

  )
}

export default Card;
import React from "react"

const Card = ({title, image, sprice, rprice, desc}) => (
    <div>
        <h1>{title}</h1>
        <h1>{sprice}</h1>
        <img src={image} />
    </div>

)

export default Card
import React from "react"
import "./Card.css"

const Card=(props)=>{
    return<div className="card" >
        <div className="i">{props.i}</div>
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="num">{props.num}</div>
    </div>
}

export default Card
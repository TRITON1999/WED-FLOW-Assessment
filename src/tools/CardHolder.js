import React from "react"
import Card from "./Card"
import "./CardHolder.css"
let i1=<i className="fa-solid fa-gauge-high fa-3x"></i>
let i2=<i className="fa-solid fa-chart-line fa-3x"></i>
let i3 = <i className="fa-solid fa-vector-square fa-3x"></i>
const CardHolder = ()=>{
    return <div className="cardHolder">
        <div className="holderContent">Convin's Automation Engine</div>
        <div className="cards">
            <Card i={i1} title={"Automated Call QA"} content={"Monitor And Analyze 100% Calls Automatically Based On A Custom Scorecard."} num={1}></Card>
            <Card i={i2} title={"Win Behavior Analysis"} content={"Identify Actions And Behaviors That Drive Positive And Negative Business Outcomes."} num= {2}></Card>
            <Card i={i3} title={"Automated Agent Coaching"} content={"Automatically Create And Share Personalized Agent Coaching At Scale."} num={3}></Card>

        </div>
    </div>
}

export default CardHolder
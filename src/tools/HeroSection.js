import React from "react"
import "./HeroSection.css"
const HeroSection = ()=>{
    return<div className="HeroSection">
    <div className="Hsection">
    <div>
        <div className="text"><span className="rangeen">3X </span>your contact center performance with</div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="2500" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="rangeen">Automated Call QA</div>
                </div>
                <div className="carousel-item">
                <div className="rangeen">Win Behavior Analysis</div>
                </div>
                <div className="carousel-item">
                <div className="rangeen">Automated Agent Coaching</div>
                </div>
            </div>
        </div>
        <div className="minorText">Convin improves agent performance, enhances customer experience, and
        increases conversions with conversation intelligence.</div>
        <button> Start Up </button> 
    </div>
    </div>
    <div className="Hsection">
    <div id="carouselExampleSlidesOnly" className="a carousel slide" data-ride="carousel" data-interval="2500" data-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="cen" src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f5e9c304e0676441e5d23d_1.Automated%20QA.png" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="cen" src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f5e9de270e0c3c680b5712_2.Win%20Behavior%20Analysis.png" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="cen" src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f5ea2acea37340b5010868_3.png" alt="First slide" />
    </div>
  </div>
</div>
    </div>
    </div>
}

export default HeroSection 
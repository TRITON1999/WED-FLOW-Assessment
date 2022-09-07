import React from "react";
import Ccards from "./Ccards";
import "./End.css"

const p1="Convin is a sales managers' Swiss army knife for coaching and call tracking. Having a library of key topics and next steps mentioned by each rep on each call helps streamline coaching moments and 1-1s, this keeps me from bouncing back and forth to programs and gives me more time to coach and help my team perform."
const p2="Convin helps our sales teams focus and be present in the moment of conversation because they're confident they can easily go back and review calls at a later time. It helps us as managers to be more thoughtful and structured about the way we coach and help reps progress their deals forward."
const p3="I have been able to quickly identify areas of improvement for my reps & able to provide coaching to allow reps to quickly pivot. Also help them make changes to their pitch."
const t1="Convin is a sales managers' Swiss army knife"
const t2="Helps us managers to be more thoughtful and structured"
const t3="Able to quickly identify areas of improvement for my reps"
const url1="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea2f059d12257905ea502d_Rectangle%20983.png"
const url2="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/60db21ceded237f9f56eccf3_1619545918924.png"
const url3="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/60db1b5edc357f2fe12c2c53_1556911493295-_1_.png"

const End = ()=>{
    return <div className="end">
 <div>Trust Convin. We Deliver Excellence.</div>
 <p>See how our clients transformed their customer conversations.</p>
 <div className="con">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Ccards url={url1} title={t1} p={p1} ></Ccards>
    </div>
    <div class="carousel-item">
      <Ccards url={url2} title={t2} p={p2} ></Ccards>
    </div>
    <div class="carousel-item">
      <Ccards url={url3} title={t3} p={p3} ></Ccards>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div>Don't just take it from us.</div>
<div className="v"><img alt="#"  src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f4c1cdbe7e7e43d2f30ebe_medal.svg" /> 
<img alt="#"  src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62f4c1cdbe7e7e43d2f30ebe_medal.svg" />
<img alt="#"  src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea76c84b3685f7ae5b6f7c_2r.png" />
<img alt="#"  src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea76c84b3685f7ae5b6f7c_2r.png" />
<img alt="#"  src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea76c84b3685f7ae5b6f7c_2r.png" />
</div>
<div>Your safety is our priority!</div>
<div className="z">
    <img src={"https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea7b06a0f5022d66259242_10.png"} alt="#" />
    <img src={"https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea7b108c07815cf3baa6e1_20.png"} alt="#" />
    <img src={"https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea7b56130ed40b1c4972fc_30.png"} alt="#" />
</div>
    </div>
}

export default End
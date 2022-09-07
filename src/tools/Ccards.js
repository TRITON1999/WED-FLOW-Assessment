import React from "react";
import "./Ccards.css";

const Ccards = (props) => {
  return (
    <div className="ccards">
      <div className="img-cont">
        <img
          src={props.url}
          loading="lazy"
          width="260"
          alt=""
          className="image-181"
        ></img>
      </div>
      <div className="stuff">
        <img
          src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62ea30d944e58ab688fb846f_Group.png"
          loading="lazy"
          alt=""
          class="image-153"
        ></img>
        <div className="displace"></div>
        <div className="h1">{props.title}</div>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

export default Ccards;

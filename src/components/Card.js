import React from "react";
import Star from "../images/star.png";


export default function Card(props) {
  let badgeText
  if (props.openSpots === 0){
    badgeText = "SOLDOUT"
  } else if(props.location === "Online"){
    badgeText ="ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${props.item.coverImg}`} className="card--image"/>
        <div className="card--stats">
          <img className="card--star" src={Star}/>
          <span>{`(${props.item.stats.rating})`}</span>
          <span className="gray">{props.item.stats.reviewCount} •</span>
          <span className="gray"> {props.item.location}</span>
        </div>
          <p className="card--title">{props.item.title}</p>
          <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
      </div>
  )
}
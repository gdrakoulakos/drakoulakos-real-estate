import React from "react";
import HouseImg from "./HouseImg";

function HouseCard (props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.area}</h2>
                <HouseImg img={props.img} />
            </div>
            <div className="middle">                
                <p className="price">{props.price}</p>
                <p className="info">Condition: {props.condition}</p>                
                <p className="info">{props.notes}</p>                
            </div>
            <div className="bottom">  
                <p className="info">Tel: {props.phone}</p>
                <a href={props.location} target="blank"><img className="mapLogo" src="/images/logos/maplogo.png" alt="House location"></img></a>
            </div>  
        </div>
    )
}

export default HouseCard;
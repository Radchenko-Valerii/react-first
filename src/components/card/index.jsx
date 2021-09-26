import React  from "react";
import data from "../../data";
import ImgWrapper from "../imgWrapper";
import CardFullName from "../fullName"
import Description from "../cardDescription"
import Links from "../links"

console.log(data)


function Card() {
  
  return <React.Fragment>
    <article className="cardWrapper">
    <ImgWrapper {...data[0]}/>
    <CardFullName {...data[0]}/>
    <Description {...data[0]}/>
    <Links {...data[0]}/>

    </article>
  </React.Fragment>}

export default Card;



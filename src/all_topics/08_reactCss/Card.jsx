import React from "react";
import style from "./card.module.css";
import Example from "./Example";

const Card = () => {
  return (
    <div id={style.cardWraper}>
      <section id={style.cardContainer}>
         <h1 className={style.heading}> John Doe</h1> 
      </section>
     <footer>I am Footer</footer>
     <Example/>
    </div>
  );
};

export default Card;

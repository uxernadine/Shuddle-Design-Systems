import React from 'react';
import designTokens from './tokens.json';

const Card = (props) => {  
    return (
      <card className="card"
        style={{
        }}
      >	
        {props.label}
      </card>
    )
  
  }
  
  export default Card;

  /*

  function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.title} />
      <div className="CardContent">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.url}>Read more</a>
      </div>
    </div>
  );
}

*/
import React from 'react';
import Button from './Button';
import designTokens from './tokens.json';

const Card = (props) => {  
    return (
      <card className="card">
          <img src={props.image} alt={props.title} />
          <div className="CardContent">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button label="Read More" />
          </div>
          {props.label}
      </card>
    )
  
  }
  
  export default Card;
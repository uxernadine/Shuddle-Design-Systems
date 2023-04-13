import React from 'react';
import Button from './Button';

  const Card = (props) => {  
    return (
      <card className="card">
          <img src={props.image} alt={props.title} />
          <div className="CardBody">
            {props.title}
            <p>
              {props.description}
            </p>
            <Button label="Read More" />
          </div>
          {props.label}
      </card>
    )
  
  }

  export default Card;

import React from 'react';
import Button from './Button';
import designTokens from './tokens.json';

const Card = (props) => {  
    return (
      <card className="card"
        style={{
          borderRadius: designTokens.global.borderRadius.value,
          backgroundColor: designTokens.global.color.primary.rail.default
        }}
      >
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
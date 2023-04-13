import React from 'react';
import Button from './Button';
import designTokens from './tokens.json';
var color = designTokens.Shuddle.global.color;

  const Card = (props) => {  
    return (
      <card className="card"
        style={{
          backgroundColor: color.primary.default.value,
          color: color.neutral.default.value,
          fontSize: designTokens.Shuddle.H3.Bold.value.fontSize
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

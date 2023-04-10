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
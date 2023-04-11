import React from 'react';
import designTokens from './tokens.json';
var color = designTokens.global.color;

const Button = (props) => {  
  return (
    <button className="button"
      style={{
        backgroundColor: color.primary.travel.default.value,
        color: color.neutral.default.value,
        fontSize: designTokens.global.fontSize.h4.value,
        //fontSize: designTokens.global.h2.value.fontSize,
        border: 'none',
        padding: '16px 8px',
        borderRadius: '8px'
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;
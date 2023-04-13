import React from 'react';
import designTokens from './tokens.json';
var color = designTokens.Shuddle.global.color;

const Button = (props) => {  
  return (
    <button className="button"
      style={{
        backgroundColor: color.primary.travel.default.value,
        color: color.neutral.default.value,
        fontSize: designTokens.Shuddle.H3.Bold.value.fontSize,
        padding: '16px 8px'
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;
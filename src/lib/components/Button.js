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
        fontWeight: designTokens.global.fontWeights['inter-0'].value,
        padding: '16px 8px',
        borderRadius: designTokens.global.borderRadius.value
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;
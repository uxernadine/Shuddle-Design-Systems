import React from 'react';
import designTokens from './tokens.json';
var color = designTokens.Shuddle.global.color;

const Button = (props) => {  
  return (
    <button className="button"
      style={{
        backgroundColor: color.primary.default.value,
        color: color.neutral.default.value,
        fontSize: designTokens.Shuddle.fontSize[2].value,
        fontWeight: designTokens.Shuddle.fontWeights['IBM-Plex-Mono'].value,
        padding: '16px 8px',
        borderRadius: designTokens.IPTS.small.value
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;
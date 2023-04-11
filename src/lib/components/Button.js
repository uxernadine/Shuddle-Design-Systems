import React from 'react';
import designTokens from './tokens.json';
var color = designTokens.global.color;
  
const Button = (props) => {  
  return (
    <button className="button"
      style={{
        backgroundColor: color.primary.default.value,
        color: color.neutral.default.value,
        fontFamily: designTokens.global['H4-Bold'].value.fontFamily,
        fontSize: designTokens.global['H4-Bold'].value.fontSize,
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
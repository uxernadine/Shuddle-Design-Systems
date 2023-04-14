import React from 'react';
import designTokens from './tokens.json';
var color = designTokens.Shuddle.global.color;
var shuddleFontFamily = designTokens.Shuddle.fontFamilies.IBM.value;
var shuddleFontWeight = designTokens.Shuddle.fontWeights['IBM-Plex-Mono'].value;
var iptsFontFamily = designTokens.IPTS.fontFamilies.inter.value;
var iptsFontWeight = designTokens.IPTS.fontWeights['font-inter-bold'].value;

const Button = (props) => {  
  return (
    <button className="button"
      style={{
        backgroundColor: color.primary.default.value,
        color: color.neutral.default.value,
        fontSize: designTokens.Shuddle.fontSize[2].value,
        fontWeight: shuddleFontWeight,
        fontFamily: shuddleFontFamily,
        padding: '16px 8px',
        borderRadius: designTokens.IPTS.small.value
      }}
    >	
      {props.label}
    </button>
  )

}

export default Button;
import React from 'react';
import Button from './Button';
import designTokens from './tokens.json';
var color = designTokens.Shuddle.global.color;
var shuddleFontFamily = designTokens.Shuddle.fontFamilies.IBM.value;
var shuddleFontWeight = designTokens.Shuddle.fontWeights['IBM-Plex-Mono'].value;
var iptsFontFontFamily = designTokens.IPTS.fontFamilies.inter.value;
var iptsFontWeight = designTokens.IPTS.fontWeights['font-inter-bold'].value;

  const Card = (props) => {  
    return (
      <card className="card"
        style={{
          backgroundColor: color.neutral.default.value,
          color: color.neutral.secondary.value,
          fontSize: designTokens.Shuddle.fontSize[3].value,
          borderRadius: designTokens.IPTS.small.value,
          boxShadow: '6px 4px 24px -7px rgba(147,112,216,0.62)'
        }}
      >
          <img src={props.image} alt={props.title} />
          <div className="CardBody"
            style={{
              fontFamily: shuddleFontFamily,
              fontWeight: shuddleFontWeight,
              fontSize: designTokens.Shuddle.fontSize[3].value,
              padding: '16px',
            }}
          >
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

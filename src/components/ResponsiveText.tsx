import React                  from 'react';
import { TextFont, TextType } from '../Entities/Texts';

export const ResponsiveText = (props: TextType) => {
  if (props.font === TextFont.TITLE)
    return <h1 style={{fontSize: props.size + 'px', ...props.otherStyle}}>{props.label}</h1>
  else
    return <p style={{fontSize: props.size + 'px', ...props.otherStyle}}>{props.label}</p>
}
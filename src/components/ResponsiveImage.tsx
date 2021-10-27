import React                          from 'react';
import { ImageAlignmentH, ImageType } from '../Entities/Images';

export const ResponsiveImage = (props: ImageType) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: props.alignmentH === ImageAlignmentH.LEFT ? 'flex-start' : props.alignmentH === ImageAlignmentH.CENTER ? 'center' : 'flex-start',
      alignItems: 'center'
    }}>
      <div style={{
        width: props.width
      }}
           className={"responsive_div_image"}
      >
        <div style={{
          paddingBottom: (props.height / props.width * 100) + '%'
        }}>
          <img src={props.url} alt={'Logo'} className={"responsive_image"} />
        </div>
      </div>
    </div>
  )
}
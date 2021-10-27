import React        from 'react'
import { TrainSvg } from '../Svgs/TrainSvg';

export const SvgTrainBackgroundWrapper = (props: {children: any}) => {
  return (
    <div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }}>
        <TrainSvg />
      </div>
      {props.children}
    </div>
  )
}
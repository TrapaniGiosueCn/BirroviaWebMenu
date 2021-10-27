import React         from 'react'
import { TrainSvg2 } from '../Svgs/TrainSvg2';
import { BarSvg }    from '../Svgs/BarSvg';

export const SvgTrain2BackgroundWrapper = (props: {children: any}) => {
  return (
    <div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }}>
        <BarSvg />
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }}>
        <TrainSvg2 />
      </div>
      {props.children}
    </div>
  )
}
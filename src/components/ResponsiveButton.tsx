import React                        from 'react';
import { ButtonAction, ButtonType } from '../Entities/Buttons';
import { useHistory }               from 'react-router-dom';
import { ResponsiveText }           from './ResponsiveText';
import { TextFont }                 from '../Entities/Texts';

export const ResponsiveButton = (props: ButtonType) => {
  const history = useHistory()
  const handleRedirect = (t: any) => {
    history.push(t)
  }
   if (props.action === ButtonAction.LINK)
     return (
       <div>
         <button
           style={{
             backgroundColor: props.color,
             borderRadius: 10,
             padding: 10
           }}
           onClick={() => handleRedirect(props.redirectTo)}
         >
           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <div style={{marginRight: 10}}>
               {
                 props.icon && props.icon
               }
             </div>
             <ResponsiveText size={22} font={TextFont.BODY} label={props.text} otherStyle={{margin: 0, color: props.textColor}} />
           </div>
         </button>
       </div>
     )
    else
     return (
       <div>
         <button
           style={{
             borderRadius: 10,
             padding: 10,
             backgroundColor: props.color,
             outline: 'none'
           }}
         >
           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <div style={{marginRight: 10}}>
               {
                 props.icon && props.icon
               }
             </div>
             <ResponsiveText size={22} font={TextFont.BODY} label={props.text} otherStyle={{margin: 0, color: props.textColor}} />
           </div>
         </button>
       </div>
     )
}
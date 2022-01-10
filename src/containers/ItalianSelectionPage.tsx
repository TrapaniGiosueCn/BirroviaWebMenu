import React                          from 'react';
import { ResponsiveText }             from '../components/ResponsiveText';
import { TextFont }                   from '../Entities/Texts';
import { ResponsiveButton }           from '../components/ResponsiveButton';
import { ButtonAction }                              from '../Entities/Buttons';
import {
  FaGlassWhiskey,
  FaHamburger,
  FaPizzaSlice,
  FaWineGlassAlt
} from 'react-icons/fa';
import { GiKnifeFork, GiSandwich }                   from 'react-icons/gi'
import { IoBeer }                                          from 'react-icons/io5'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { SvgTrain2BackgroundWrapper }                      from '../Hoc/SvgTrain2BackgroundWrapper';

export const ItalianSelectionPage = () => {
  return (
    <SvgTrain2BackgroundWrapper>
      <div className={'full_center_div'}>
        <ResponsiveText size={40} font={TextFont.TITLE} label={'Scegli quello che preferisci...'} otherStyle={{textAlign: 'center'}} />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: '30%',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Storia'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/storia'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Panini'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/panini'}
            textColor={'white'}
            icon={<GiSandwich color={'white'} size={20}/> }
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Pizze'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/pizze'}
            textColor={'white'}
            icon={<FaPizzaSlice color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Cucina'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/cucina'}
            textColor={'white'}
            icon={<GiKnifeFork color={'white'} size={20}/> }
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Burgers'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/burgers'}
            textColor={'white'}
            icon={<FaHamburger color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Birre'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/birre'}
            textColor={'white'}
            icon={<IoBeer color={'white'} size={20}/> }
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Vini'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/vini'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Bar'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano/bar'}
            textColor={'white'}
            icon={<FaGlassWhiskey color={'white'} size={20}/> }
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Eventi'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'https://www.facebook.com/BirroviaCuneo/events'}
            link
            textColor={'white'}
            icon={<BsFillCalendar2DateFill color={'white'} size={20}/> }
          />
        </div>
      </div>
    </SvgTrain2BackgroundWrapper>
  )
}
import React                            from 'react';
import { ResponsiveText }               from '../components/ResponsiveText';
import { TextFont }                   from '../Entities/Texts';
import { ResponsiveButton }           from '../components/ResponsiveButton';
import { ButtonAction }               from '../Entities/Buttons';
import {
  FaGlassWhiskey,
  FaHamburger,
  FaPizzaSlice,
  FaWineGlassAlt
}                                     from 'react-icons/fa'
import { SvgTrain2BackgroundWrapper } from '../Hoc/SvgTrain2BackgroundWrapper';
import { GiKnifeFork, GiSandwich }    from 'react-icons/gi';
import { IoBeer }                     from 'react-icons/io5';
import { BsFillCalendar2DateFill }    from 'react-icons/bs';

export const EnglishSelectionPage = () => {
  return (
    <SvgTrain2BackgroundWrapper>
      <div className={'full_center_div'}>
        <ResponsiveText size={40} font={TextFont.TITLE} label={'Choose what you prefer...'} otherStyle={{textAlign: 'center'}} />
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
            text={'Story'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/story'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Sandwich'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/sandwich'}
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
            text={'Pizzas'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/pizzas'}
            textColor={'white'}
            icon={<FaPizzaSlice color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'kitchen'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/kitchen'}
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
            redirectTo={'/english/burgers'}
            textColor={'white'}
            icon={<FaHamburger color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Beers'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/beers'}
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
            text={'Wines'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/wines'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Bar'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english/bar'}
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
            text={'Events'}
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
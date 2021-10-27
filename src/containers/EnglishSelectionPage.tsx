import React                          from 'react';
import { ResponsiveText }             from '../components/ResponsiveText';
import { TextFont }                   from '../Entities/Texts';
import { ResponsiveButton }           from '../components/ResponsiveButton';
import { ButtonAction }               from '../Entities/Buttons';
import { FaWineGlassAlt }             from 'react-icons/fa'
import { SvgTrain2BackgroundWrapper } from '../Hoc/SvgTrain2BackgroundWrapper';

export const EnglishSelectionPage = () => {
  return (
    <SvgTrain2BackgroundWrapper>
      <div className={'full_center_div'}>
        <ResponsiveText size={40} font={TextFont.TITLE} label={'Choose what you prefer...'} otherStyle={{textAlign: 'center'}} />
        <div style={{
          display: 'flex',
          marginTop: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginBottom: '7%'
        }}>
          <ResponsiveButton
            text={'Button1'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Button2'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
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
            text={'Button3'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Button4'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
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
            text={'Button5'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Button6'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
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
            text={'Button7'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/english'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
        </div>
      </div>
    </SvgTrain2BackgroundWrapper>
  )
}
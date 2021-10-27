import React                          from 'react';
import { ResponsiveText }             from '../components/ResponsiveText';
import { TextFont }                   from '../Entities/Texts';
import { ResponsiveButton }           from '../components/ResponsiveButton';
import { ButtonAction }               from '../Entities/Buttons';
import { FaWineGlassAlt }             from 'react-icons/fa'
import { SvgTrain2BackgroundWrapper } from '../Hoc/SvgTrain2BackgroundWrapper';

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
            text={'Pulsante1'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Pulsante2'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
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
            text={'Pulsante3'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Pulsante4'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
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
            text={'Pulsante5'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
          <div style={{width: 20}}/>
          <ResponsiveButton
            text={'Pulsante6'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
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
            text={'Pulsante7'}
            color={'black'}
            action={ButtonAction.LINK}
            redirectTo={'/italiano'}
            textColor={'white'}
            icon={<FaWineGlassAlt color={'white'} size={20}/> }
          />
        </div>
      </div>
    </SvgTrain2BackgroundWrapper>
  )
}
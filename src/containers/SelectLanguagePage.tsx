import React                         from 'react';
import { ResponsiveImage }           from '../components/ResponsiveImage';
import Logo                          from '../Images/BirroviaLogo.jpeg';
import { ImageAlignmentH }           from '../Entities/Images';
import { ResponsiveButton }          from '../components/ResponsiveButton';
import { ButtonAction }              from '../Entities/Buttons';
import UK                            from '../Images/uk_flag.png'
import IT                            from '../Images/it-flag.png'
import { SvgTrainBackgroundWrapper } from '../Hoc/SvgTrainBAckgroundWrapper';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Welcome to Birrovia...",
  "Benvenuto in Birrovia..."
];

export const SelectLanguagePage = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
        setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <SvgTrainBackgroundWrapper>
      <div className={'full_center_div'}>
        <ResponsiveImage width={250} height={220} url={Logo} alignmentH={ImageAlignmentH.CENTER} />
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: "10%"
        }}>
          <TextTransition
            text={ TEXTS[index % TEXTS.length] }
            springConfig={ presets.gentle }
            style={{fontSize: '35px', fontWeight: 800, margin: 0, textAlign: 'center'}}
          />
          <div style={{
            width: '100%',
            marginTop: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%'
            }}>
              <ResponsiveButton
                text={'English'}
                color={'black'}
                action={ButtonAction.LINK}
                redirectTo={'/english'}
                textColor={'white'}
                icon={<ResponsiveImage url={UK} height={28} width={35} alignmentH={ImageAlignmentH.CENTER} /> }
              />
              <div style={{width: 20}}/>
              <ResponsiveButton
                text={'Italiano'}
                color={'black'}
                action={ButtonAction.LINK}
                redirectTo={'/italiano'}
                textColor={'white'}
                icon={<ResponsiveImage url={IT} height={28} width={35} alignmentH={ImageAlignmentH.CENTER} /> }
              />
            </div>
          </div>
        </div>
      </div>
    </SvgTrainBackgroundWrapper>
  )
}
import React from 'react';
import useStyles from './layout.style';
import WaveSvg from '../assets/wave';
import LetsTalkLogoComponent from '../assets/letsTalks-logo.component';

function LayoutComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.signupPageContainer}>
      <WaveSvg className={classes.waveBackground} />
      {props.component}
    </div>
  );
}
export default LayoutComponent;

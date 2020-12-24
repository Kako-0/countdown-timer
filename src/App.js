import React from 'react';

import './app.css';

import Countdown from './components/countdown.js';
import Credits from './components/credits.js';
import SocialMidia from './components/footer.js';


function App() {
  return (
    <div id='app'>
      <p className='title'>WE'RE LAUNCHING SOON</p>
      <Countdown></Countdown>
      <SocialMidia></SocialMidia>
      <Credits></Credits>
    </div>
  );
}

export default App;

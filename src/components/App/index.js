/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import SettingsForm from 'src/containers/Settings';


import './app.scss';

/**
 * Code
 */

const Background = 'https://www.wpclipart.com/blanks/parchment/parchment_scroll_background.jpg';

const iStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
};

const App = () => (
  <div
    id="app"
    style={iStyle}
  >
    <Messages />
    <SettingsForm />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;

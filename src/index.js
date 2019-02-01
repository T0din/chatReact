/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
// Importer qqchose de react-redux pour rendre store dispo dans app
import { Provider } from 'react-redux';
import store from 'src/store';
import io from 'socket.io-client';
import { receiveMessage } from 'src/store/reducer';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}><App /></Provider>
);

render(rootComponent, document.getElementById('root'));

// Connect socket
const socket = io('http://localhost:3001');

socket.on('send_message', (message) => {
  store.dispatch(receiveMessage(message));
});
export default socket;

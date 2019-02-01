/* Import : NPM */
import React from 'react';
import PropTypes from 'prop-types';

import './messages.scss';


const Messages = ({
  messages, logged, userLogin,
}) => {
  function makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  const iStyle = {
    fontSize: '25px',
    marginRight: '0.3em',
    color: 'blue',
  };
  const iStyle2 = {
    textDecoration: 'underline',
  };
  const iStyle3 = {
    fontSize: '25px',
    marginRight: '0.3em',
    color: 'darkgreen',
  };

  if (logged) {
    return (
      <div id="messages">
        <h1>Messages</h1>
        <ul>
          {messages.map((message) => {
            if (message.users === userLogin) {
              return (

                <div className="div-message" key={makeid()}>
                  <li key={makeid() + 1} className="user">
                    <span style={iStyle}><i className="fas fa-hat-wizard" /> </span> <span style={iStyle2}>{userLogin}</span>
                  </li>
                  <li key={makeid() + 2} className="message">
                    <span className="message-span">{message.message}</span>
                  </li>
                </div>
              );
            }
            // eslint-disable-next-line no-else-return
            else {
              return (
                <div className="div-message-right">
                  <li key={makeid()} className="user">
                    <span style={iStyle3}><i className="fas fa-dragon" /> </span> <span style={iStyle2}>{message.users}</span>
                  </li>
                  <li key={makeid() + 1} className="message">
                    <span className="message-span">{message.message}</span>
                  </li>
                </div>
              );
            }
          })}

        </ul>
      </div>
    );
  } return (
    <div id="messages">
      <h2>Bienvenue dans le chat</h2>
      <p>Veuillez vous authentifier avant de pouvoir écrire !</p>
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      users: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  logged: PropTypes.bool.isRequired,
  userLogin: PropTypes.string.isRequired,
};

export default Messages;

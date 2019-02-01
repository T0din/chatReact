import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import './settings.scss';

const FormSettings = ({
  SettingsInputChange, SettingsFormSubmit, inputsettings, logged, userLogin,
}) => {
  const handleChangeSettings = (event) => {
    const { name, value } = event.target;
    const settings = {
      [name]: value,
    };
    SettingsInputChange(settings);
  };

  const handleSubmitSettings = (event) => {
    event.preventDefault();
    SettingsFormSubmit(inputsettings);
  };
  const iStyle = {
    fontSize: '48px',
  };

  if (!logged) {
    return (
      <div id="settings">
        <h3>Login</h3>
        <Form
          className="settings-form"
          onSubmit={handleSubmitSettings}
        >
          <Form.Input
            type="form"
            autoComplete="off"
            name="inputsettings"
            placeholder="Entrez votre nom"
            value={inputsettings || ''}
            onChange={handleChangeSettings}
            className="settings-input"
          />
        </Form>
      </div>
    );
  } return (
    <div id="settings">
      <span className="span-settings" style={iStyle}>
        <i className="fab fa-fort-awesome" />
        <span className="span-settings">{userLogin}</span>
      </span>
    </div>
  );
};

FormSettings.propTypes = {
  SettingsInputChange: PropTypes.func.isRequired,
  SettingsFormSubmit: PropTypes.func.isRequired,
  inputsettings: PropTypes.string,
  logged: PropTypes.bool.isRequired,
  userLogin: PropTypes.string.isRequired,
};
FormSettings.defaultProps = {
  inputsettings: undefined,
};

export default FormSettings;

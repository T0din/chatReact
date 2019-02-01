import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import './form.scss';

const FormMessage = ({
  loginInputChange, loginFormSubmit, input, users, userLogin,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const modif = {
      [name]: value,
    };
    loginInputChange(modif);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (document.getElementById('form-input').value !== '') {
      const newInput = input.trim();
      loginFormSubmit(newInput, users, userLogin);
      document.getElementById('form-input').value = '';
    }
  };

  const iStyle = {
    fontSize: '32px',
  };

  return (
    <div id="form">
      <h3>Message</h3>
      <div id="form-form">
        <Form onSubmit={handleSubmit}>
          <Form.Input
            type="form"
            id="form-input"
            name="input"
            autoComplete="off"
            placeholder="Entrez votre message"
            value={input || ''}
            onChange={handleChange}
            className="form-form"
          />
          <Form.Button type="submit" primary>
            <span style={iStyle}>
              <i className="fas fa-scroll" />
            </span>
          </Form.Button>
        </Form>
      </div>
    </div>
  );
};

FormMessage.propTypes = {
  loginInputChange: PropTypes.func.isRequired,
  loginFormSubmit: PropTypes.func.isRequired,
  input: PropTypes.string,
  users: PropTypes.string.isRequired,
  userLogin: PropTypes.string.isRequired,
};
FormMessage.defaultProps = {
  input: undefined,
};
export default FormMessage;

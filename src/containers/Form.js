import { connect } from 'react-redux';
import FormMessage from 'src/components/Form';
import { loginInputChange, loginFormSubmit } from 'src/store/reducer';

const mapStateToProps = state => ({
  input: state.input,
  users: state.users,
  userLogin: state.userLogin,
});

const mapDispatchToProps = dispatch => ({
  loginInputChange: (modif) => {
    dispatch(loginInputChange(modif));
  },
  loginFormSubmit: (state, users, userLogin) => {
    dispatch(loginFormSubmit(state, users, userLogin));
  },
});

const FormMessageContainer = connect(mapStateToProps, mapDispatchToProps)(FormMessage);

export default FormMessageContainer;

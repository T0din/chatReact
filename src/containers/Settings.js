import { connect } from 'react-redux';
import FormSettings from 'src/components/Settings';
import { SettingsInputChange, SettingsFormSubmit } from 'src/store/reducer';

const mapStateToProps = state => ({
  inputsettings: state.inputsettings,
  logged: state.logged,
  userLogin: state.userLogin,
});

const mapDispatchToProps = dispatch => ({
  SettingsInputChange: (settings) => {
    dispatch(SettingsInputChange(settings));
  },
  SettingsFormSubmit: (state) => {
    dispatch(SettingsFormSubmit(state));
  },
});

const FormSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(FormSettings);

export default FormSettingsContainer;

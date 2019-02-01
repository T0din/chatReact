/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Messages from 'src/components/Messages';

// Action Creators


const mapStateToProps = state => ({
  messages: state.messages,
  logged: state.logged,
  users: state.users,
  userLogin: state.userLogin,
});

const mapDispatchToProps = {};

// Container
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

/**
 * Export
 */
export default MessagesContainer;

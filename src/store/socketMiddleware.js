import { SEND_MESSAGE, RECEIVE_MESSAGE } from 'src/store/reducer';
import socket from 'src/index';

const socketMiddleware = () => next => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      socket.emit('send_message', {
        message: action.message,
        users: action.users,
      });
      break;
    case RECEIVE_MESSAGE:
      next(action);
      break;
    default:
      next(action);
  }
};

export default socketMiddleware;

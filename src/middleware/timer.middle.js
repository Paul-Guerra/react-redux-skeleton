import ACTIONS from '../actions/action.types';
import update from '../actions/timer.actions';
import startTimer from '../services/timer.service';

const timerMiddle = store => next => (action) => {
  switch (action.type) {
    case ACTIONS.APP.READY:
      startTimer((time) => { store.dispatch(update(time)); });
      break;

    default:
      break;
  }
  next(action); // pass action on to next middleware
};

export default timerMiddle;

import ACTIONS from '../actions/action.types';
import { get, got } from '../actions/fetch.actions';

const fetch = store => next => action => {
  let getting;
  // receive a fetch click action
  switch (action.type) {
    case ACTIONS.FETCH.CLICK:
        getting = get(action.url);
        store.dispatch(getting); 
        getting.promise.then((data) => {
            store.dispatch(got(data)); // dispatch the GOT action start a new action
        });
        break;

    default:
        break;
  }
  next(action); // pass action on to next middleware
};

export default fetch;

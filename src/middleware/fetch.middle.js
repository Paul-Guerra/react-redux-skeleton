import ACTIONS from '../actions/action.types';
import { fetching, fetched } from '../actions/fetch.actions';
import fetch from '../services/fetch.service';

const fetchMiddle = store => next => action => {
  let fetchPromise;
  // receive a fetch click action
  switch (action.type) {
    case ACTIONS.FETCH.CLICK:
        fetchPromise = fetch(action.url);
        fetchPromise.then((data) => {
          store.dispatch(fetched(data)); // dispatch the GOT action start a new action
        });
        store.dispatch(fetching(fetchPromise, action.url)); 
        break;

    default:
        break;
  }
  next(action); // pass action on to next middleware
};

export default fetchMiddle;

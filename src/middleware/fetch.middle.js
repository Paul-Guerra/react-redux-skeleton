import ACTIONS from '../actions/action.types';
import { fetching, fetched, error } from '../actions/fetch.actions';
import fetch from '../services/fetch.service';

function makeDispatcher(dispatch, producer) {
  return function dispatcher() {
    dispatch(producer(...arguments));
  };
}

const fetchMiddle = store => next => (action) => {
  let fetchPromise;
  // receive a fetch click action
  switch (action.type) {
    case ACTIONS.FETCH.CLICK:
      fetchPromise = fetch(action.url);
      fetchPromise.then(makeDispatcher(store.dispatch, fetched)).catch((e) => {
        store.dispatch(error(e));
      });
      // fetchPromise.then((data) => {
      //   store.dispatch(fetched(data));
      // }).catch((e) => {
      //   store.dispatch(error(e));
      // });
      store.dispatch(fetching(fetchPromise, action.url));
      break;

    default:
      break;
  }
  next(action); // pass action on to next middleware
};

export default fetchMiddle;

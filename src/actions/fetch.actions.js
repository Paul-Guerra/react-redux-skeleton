import fetch from '../services/fetch.service';
import ACTIONS from './action.types';

export function get(url) {
  return {
    type: ACTIONS.FETCH.GETTING,
    promise: fetch(url),
    url
  };
}

export function click(url) {
  return {
    type: ACTIONS.FETCH.CLICK,
    url
  };
}

export function got(data) {
  return {
    type: ACTIONS.FETCH.GOT,
    data
  };
}

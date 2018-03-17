import ACTIONS from '../actions/action.types';

const INITIAL_STATE = {
  status: 'sleeping',
  results: []
};

export default (state = INITIAL_STATE, action) => {
  let newState;
  let result = {};

  switch (action.type) {
    case ACTIONS.FETCH.GETTING:
        newState = {
            status: 'getting',
            results: [].concat(state.results) 
        };
        break;

    case ACTIONS.FETCH.GOT:
        newState = {
            status: 'got',
            results: [].concat(state.results, [action.data])
        };
        break;

    default:
        newState = Object.assign({}, state);
        break;
  }

  return newState;
};

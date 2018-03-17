import ACTIONS from './action.types';

export function update(data) {
  return {
    type: ACTIONS.TIMER.UPDATE,
    data
  };
}

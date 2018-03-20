/* global jest, describe, it, expect, afterEach */

import ACTIONS from '../../actions/action.types';
import timerService from '../../services/timer.service';
import timer from '../timer.middle';

jest.mock('../../services/timer.service');

const store = { dispatch: jest.fn() };
const next = jest.fn();
const action = { type: ACTIONS.APP.READY };

describe('Timer middleware', () => {
  afterEach(() => {
    store.dispatch.mockReset();
    next.mockReset();
  });

  it('starts the service when the app is ready', () => {

    timer(store)(next)(action);
    expect(timerService).toHaveBeenCalled();
    expect(typeof timerService.mock.calls[0][0]).toBe('function');
  });

  it('calls next(action', () => {
    timer(store)(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(action);
  });
});

/* global jest, describe, it, expect, afterEach */

import ACTIONS from '../../actions/action.types';
import { fetching, fetched, error } from '../../actions/fetch.actions';
import fetchService from '../../services/fetch.service';
import fetch from '../fetch.middle';

jest.mock('../../services/fetch.service');
jest.mock('../../actions/fetch.actions');


describe('Fetch middleware', () => {
  const store = { dispatch: jest.fn() };
  const next = jest.fn();
  const action = { type: ACTIONS.FETCH.CLICK, url: 'foo' };
  const otherAction = { type: 'SOMETHING ELSE' };

  afterEach(() => {
    store.dispatch.mockClear();
    next.mockClear();
    fetchService.mockClear();
  });

  it('calls next(action)', () => {
    fetch(store)(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('does nothing by default', () => {
    fetch(store)(next)(otherAction);
    expect(fetchService).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(otherAction);
  });

  it('Calls thefetch service with the url', () => {
    fetch(store)(next)(action);
    expect(fetchService).toHaveBeenCalledTimes(1);
    expect(fetchService).toHaveBeenCalledWith(action.url);
  });

  it('dispatches a FETCHING action', () => {
    fetching.mockReturnValue('FETCHING');
    fetch(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith('FETCHING');
  });
});

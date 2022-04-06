import * as fromGeneralActions from './general.actions';
import { GeneralState, initialState, generalReducer } from './general.reducer';

describe('General Reducer', () => {
  let state: GeneralState;

  beforeEach(() => {
    state = { ...initialState };
  });

  describe('unknown action', () => {
    test('returns the initial state', () => {
      const action = {} as any;
      const result = generalReducer(state, action);

      expect(result).toBe(state);
    });
  });
});

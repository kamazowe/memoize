import {
  initialState,
  GENERAL_FEATURE_KEY,
  GeneralState,
} from './general.reducer';
import { generalQuery } from './general.selectors';

describe('General Selectors', () => {
  let storeState: { [GENERAL_FEATURE_KEY]: GeneralState };

  beforeEach(() => {
    storeState = {
      [GENERAL_FEATURE_KEY]: initialState,
    };
  });
});

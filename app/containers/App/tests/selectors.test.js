import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectLocationState,
  selectTwilioToken,
} from 'containers/App/selectors';

describe('selectLocationState', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocationState()(mockedState)).toEqual(route.toJS());
  });
});

describe('selectTwilioToken', () => {
  it('should select the Twilio Token as string ', () => {
    const phone = fromJS({
      token: null,
    });
    const mockedState = fromJS({
      phone,
    });
    expect(selectTwilioToken()(mockedState)).toEqual(phone.get('token'));
  });
});


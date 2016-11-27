/*
 * IncomeCall Messages
 *
 * This contains all the text for the IncomeCall component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.InOutCall.header',
    defaultMessage: 'This is IncomeCall container !',
  },
  unknown: {
    id: 'app.containers.InOutCall.unknown',
    defaultMessage: 'Unknown',
  },
  callingIn: {
    id: 'app.containers.InOutCall.callingIn',
    defaultMessage: 'Is trying to reach you!{break}I hope he can do it!',
  },
  callingOut: {
    id: 'app.containers.InOutCall.callingOut',
    defaultMessage: 'You are trying to make a Call.{break} I hope you can do it!',
  },
  accept: {
    id: 'app.containers.InOutCall.accept',
    defaultMessage: 'Accept',
  },
  hangout: {
    id: 'app.containers.InOutCall.hangout',
    defaultMessage: 'Cancel',
  },
});

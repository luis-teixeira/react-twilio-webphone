/*
 *
 * Options
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { appLocalesSelectsOpt } from '../../i18n';

import messages from './messages';

import Card from 'components/Card';
import CardBody from 'components/CardBody';
import { Form } from 'semantic-ui-react';

import { changeLocale } from '../LanguageProvider/actions';
import { selectLocale } from '../LanguageProvider/selectors';

export class Options extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card>
        <CardBody height="calc(100vh - 100px)" >
          <h3 className="title"><FormattedMessage {...messages.header} /></h3>
          <Form>
            <Form.Field>
              <label htmlFor="language" ><FormattedMessage {...messages.language} /></label>
              <Form.Select name="language" options={appLocalesSelectsOpt} placeholder="Select Language" onChange={this.props.onLocaleToggle} />
            </Form.Field>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

Options.propTypes = {
  onLocaleToggle: React.PropTypes.func,
};

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt, serializedForm) => dispatch(changeLocale(serializedForm.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

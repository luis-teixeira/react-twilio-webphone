// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'dialpad',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/App/sagas'),
          System.import('containers/DialPad/reducer'),
          System.import('containers/DialPad'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, dialPadReducer, component]) => {
          injectSagas(sagas.default);
          injectReducer('dialPad', dialPadReducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'call-logs',
      name: 'callLogs',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CallLogs/reducer'),
          System.import('containers/CallLogs/sagas'),
          System.import('containers/CallLogs'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('callLogs', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'options',
      name: 'options',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Options'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

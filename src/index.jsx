import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import debugConfig from 'config/DebugConfig';
import * as Sentry from '@sentry/react';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await debugConfig();
    ReactDOM.render(<App />, document.getElementById('root'));
  })();
} else {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  ReactDOM.render(<App />, document.getElementById('root'));
}

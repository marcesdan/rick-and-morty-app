import React, { lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Sentry from '@sentry/react';
import StartupRedux from 'stores/StartupRedux';
import withRoot from 'layout/withRoot';
import DriversRedux from 'stores/CharactersRedux';
import ErrorMessage from 'components/ErrorMessage';

const CharactersIndex = lazy(() => import(/* webpackChunkName: "driver-submit" */ './CharactersIndex'));
const CharactersShow = lazy(() => import(/* webpackChunkName: "driver-submit" */ './CharactersShow'));

const RootContainer = () => {
  const dispatch = useDispatch();
  dispatch(StartupRedux.startup());
  dispatch(DriversRedux.enabledDomainsRequest());
  return (
    <Sentry.ErrorBoundary fallback={ErrorMessage}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={CharactersIndex} />
          <Route exact path="/characters/:id" component={CharactersShow} />
        </Switch>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
};

export default memo(withRoot(RootContainer));

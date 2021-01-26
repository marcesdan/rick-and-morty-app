import React, { lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Sentry from '@sentry/react';
import StartupRedux from 'stores/StartupRedux';
import withRoot from 'layout/withRoot';
import CharactersRedux from 'stores/CharactersRedux';
import ErrorMessage from 'components/ErrorMessage';
import { CircularProgress } from '@material-ui/core';

const CharactersIndex = lazy(() => import(/* webpackChunkName: "characters-index" */ './CharactersIndex'));
const CharactersShow = lazy(() => import(/* webpackChunkName: "characters-show" */ './CharactersShow'));

const RootContainer = () => {
  const dispatch = useDispatch();
  dispatch(StartupRedux.startup());
  dispatch(CharactersRedux.charactersRequest());
  return (
    <Sentry.ErrorBoundary fallback={ErrorMessage}>
      <Suspense fallback={<CircularProgress key={0} />}>
        <Switch>
          <Route exact path="/" component={CharactersIndex} />
          <Route exact path="/characters/:id" component={CharactersShow} />
        </Switch>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
};

export default memo(withRoot(RootContainer));

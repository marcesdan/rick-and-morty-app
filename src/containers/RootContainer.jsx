import React, {
  lazy, memo, Suspense,
} from 'react';
import { Router } from '@reach/router';
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
        <Router>
          <CharactersIndex path="/" />
          <CharactersShow path="/characters/:id" />
        </Router>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
};

export default memo(withRoot(RootContainer));

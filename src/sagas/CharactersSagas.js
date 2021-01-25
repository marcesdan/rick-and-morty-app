import { call, put } from 'redux-saga/effects';
import CharactersRedux from 'stores/CharactersRedux';

export function* getCharacters(api, action) {
  const { filters } = action;
  // make the call to the api
  const response = yield call(api.getCharacters, filters);
  if (response.ok) {
    yield put(CharactersRedux.charactersSuccess());
  } else {
    yield put(CharactersRedux.charactersFailure());
  }
}

export function* findCharacter(api, action) {
  const { id } = action;
  // make the call to the api
  const response = yield call(api.findCharacter, id);
  if (response.ok) {
    yield put(CharactersRedux.characterShowSuccess());
  } else {
    yield put(CharactersRedux.characterShowFailure());
  }
}

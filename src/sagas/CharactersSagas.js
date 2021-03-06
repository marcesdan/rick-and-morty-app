import { call, put, select } from 'redux-saga/effects';
import CharactersRedux, { CharactersSelectors } from 'stores/CharactersRedux';

export function* getCharacters(api) {
  // make the call to the api
  const filters = yield select(CharactersSelectors.selectedFilters);
  console.tron.log('por pedir characters', filters);
  const response = yield call(api.getCharacters, filters);
  if (response.ok) {
    console.tron.log('success');
    yield put(CharactersRedux.charactersSuccess(response.data));
  } else {
    console.tron.log(response);
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

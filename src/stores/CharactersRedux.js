import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  charactersRequest: ['filters'],
  findCharacterRequest: ['id'],
  charactersSuccess: ['characters'],
  charactersFailure: null,
});

export const CharactersTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  characters: null,
  pagesInfo: {},
});

/* ------------- Selectors ------------- */

export const CharactersSelectors = {
  characters: (state) => state.characters.characters,
  pagesInfo: (state) => state.characters.pagesInfo,
};

/* ------------- Reducers ------------- */

// request the characters
export const request = (state, { filters }) => state.merge({
  fetching: true, error: null, filters,
});

// successful characters lookup
export const success = (state, { characters: { info, results } }) => state.merge({
  fetching: false, error: null, characters: results, pagesInfo: info,
});

// failed to get the characters
export const failure = (state) => state.merge({ fetching: false, error: true, characters: [] });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHARACTERS_REQUEST]: request,
  [Types.FIND_CHARACTER_REQUEST]: request,
  [Types.CHARACTERS_SUCCESS]: success,
  [Types.CHARACTERS_FAILURE]: failure,
});

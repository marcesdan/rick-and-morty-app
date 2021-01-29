import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  charactersRequest: null,
  findCharacterRequest: ['id'],
  charactersSuccess: ['characters'],
  charactersFailure: null,
  changeFilter: ['filter'],
});

export const CharactersTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  characters: [],
  pagesInfo: {},
  filters: { page: 1 },
});

/* ------------- Selectors ------------- */

export const CharactersSelectors = {
  characters: (state) => state.characters.characters,
  pagesInfo: (state) => state.characters.pagesInfo,
  selectedFilters: (state) => state.characters.filters,
};

/* ------------- Reducers ------------- */

// request the characters
export const request = (state) => state.merge({
  fetching: true, error: null,
});

// successful characters lookup
export const success = (state, { characters: { info, results } }) => state.merge({
  fetching: false,
  error: null,
  characters: state.characters.concat(results),
  pagesInfo: info,
  filters: { ...state.filters, page: state.filters.page + 1 },
});

// failed to get the characters
export const failure = (state) => state.merge({ fetching: false, error: true, characters: [] });

export const editFilter = (state, { filter }) => {
  const auxFilter = { ...state.filters, ...filter, page: 1 };
  if (!Object.values(filter)[0]) {
    // evito un query param vacio
    delete auxFilter[Object.keys(filter)[0]];
  }
  return state.merge({
    filters: auxFilter,
    characters: [],
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHARACTERS_REQUEST]: request,
  [Types.FIND_CHARACTER_REQUEST]: request,
  [Types.CHARACTERS_SUCCESS]: success,
  [Types.CHARACTERS_FAILURE]: failure,
  [Types.CHANGE_FILTER]: editFilter,
});

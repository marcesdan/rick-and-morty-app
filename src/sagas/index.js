import { all, takeLatest } from 'redux-saga/effects';
import { CharactersTypes } from 'stores/CharactersRedux';
import GitHubSrv from 'services/GitHubService';
import CharactersSrv from 'services/CharactersService';
// import DebugConfig from '../config/DebugConfig';
/* ------------- Types ------------- */
import { StartupTypes } from 'stores/StartupRedux';
import { GithubTypes } from 'stores/GithubRedux';

/* ------------- Sagas ------------- */
import { startup } from 'sagas//StartupSagas';
import getUserAvatar from 'sagas/GithubSagas';
import { getCharacters, findCharacter } from 'sagas/CharactersSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const charactersSrv = CharactersSrv.create();
const gitHubSrv = GitHubSrv.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, gitHubSrv),
    takeLatest(CharactersTypes.CHARACTERS_REQUEST, getCharacters, charactersSrv),
    takeLatest(CharactersTypes.FIND_CHARACTER_REQUEST, findCharacter, charactersSrv),
  ]);
}

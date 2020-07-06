import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/Users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const results = yield call(api.getUsers);
    console.log(results);
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;

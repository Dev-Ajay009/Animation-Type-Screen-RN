import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Fetch data from an API
function* fetchDataSaga(action) {
  try {
    const response = yield call(axios.get, 'https://api.example.com/data');
    // Dispatch success action with the fetched data
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    // Dispatch failure action if an error occurs
    yield put({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
}

// Watch for specific actions and call the appropriate Saga
function* watchFetchData() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default watchFetchData;

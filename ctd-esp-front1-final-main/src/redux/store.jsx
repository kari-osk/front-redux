import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import characterSaga from './characterSaga';
import rootReducer from './rootReducer';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(characterSaga)

export default store
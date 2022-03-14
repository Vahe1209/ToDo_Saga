import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import todoSaga from './sagas/todoSaga'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

sagaMiddleWare.run(todoSaga)

export default store

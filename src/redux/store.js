import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const logger = createLogger({
  level: 'info',
  diff: false,
  duration: true,
  collapsed: true
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = initialState =>
  createStore(reducers, initialState, composeEnhancers(applyMiddleware(logger)))

const store = configureStore()

export default store

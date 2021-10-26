
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { appSettingsReducer } from './reducers/appSettingsReducer'



// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default


const rootReducer = combineReducers({
    appSettingsModule: appSettingsReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// For Debug
// window.theStore = store;
// store.subscribe(() => {
//     console.log('Global State is:', store.getState())
// })


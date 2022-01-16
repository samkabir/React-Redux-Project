import { combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
      books: bookReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
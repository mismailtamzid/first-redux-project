import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
const initialState = {};
export const store = createStore(rootReducer, initialState);

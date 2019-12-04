import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./Reducer";

const middlewares = [thunk, logger];

export default createStore(reducer, applyMiddleware(...middlewares));

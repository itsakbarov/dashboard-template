import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {createStore} from "redux";

import rootReducer from "../reducers";

const persistConfig = {
    key: "kids-sport-admin",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persist = persistStore(store);




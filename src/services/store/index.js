import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "../reducers";


const persistConfig = {
  key: "eurosoft-admin",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, {});

export const persistor = persistStore(store);

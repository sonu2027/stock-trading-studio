// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import { setJob } from "./saveJobSlice";

// const rootReducer = combineReducers({
//     job: setJob,
// });

// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import saveJobReducer from "./saveJobSlice"; 

interface RootState {
    job: ReturnType<typeof saveJobReducer>;
}

const rootReducer = combineReducers({
    job: saveJobReducer, 
});

const persistConfig: PersistConfig<RootState> = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
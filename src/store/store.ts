import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import saveScannerReducer from "./savedScannerSlice";
import purchaseReducer from "./purchaseInstrumentSlice";

const rootReducer = combineReducers({
    savedScanner: saveScannerReducer,
    purchasedInstrument: purchaseReducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

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

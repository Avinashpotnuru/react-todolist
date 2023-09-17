import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./api/rootReducer";
import restApis from "./api/restApis";

import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [restApis.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

setupListeners(store.dispatch);

export { store };

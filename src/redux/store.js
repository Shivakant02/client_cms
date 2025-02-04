import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import policyReducer from "./slices/policySlice";

const store= configureStore({
    reducer: {
        auth: authReducer,
        policy: policyReducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({ serializableCheck: false }),
      devTools: true,
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import policyReducer from "./slices/policySlice";
import claimReducer from "./slices/claimSlice"
import adminReducer from "./slices/adminSlice"

const store= configureStore({
    reducer: {
        auth: authReducer,
        policy: policyReducer,
        claim:claimReducer,
        admin:adminReducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({ serializableCheck: false }),
      devTools: true,
})

export default store;
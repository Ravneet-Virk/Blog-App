import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSilce"

const store = configureStore({
    reducer: {
        authReducer
    }
})

export default store;
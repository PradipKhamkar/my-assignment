import loginReducer from "./userSlice/loginSlice";
import logOutReducer from "./userSlice/logOut";
import {configureStore} from "@reduxjs/toolkit";

const store  = configureStore({
    reducer:{
        loginUser:loginReducer,
        logout:logOutReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
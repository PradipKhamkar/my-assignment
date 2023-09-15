import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { LoginUser, getLoggedUser } from "../../api/auth";
import {Dispatch} from "redux";

const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers: {
        setLoading(state) {
            return {
                loading: true,
            }
        },
        setSuccess(state, action:PayloadAction<any>) {
            return {
                ...state,
                loading: false,
                success:true,
                isAuth:true,
                error: null,
                user: action.payload.user,
            }
        },
        setFailed(state,  action:PayloadAction<any>) {
            return {
                ...state,
                success:false,
                loading: false,
                error: action.payload
            }
        },
        clearError(state) {
            return {
                ...state,
                error: null
            }
        }
    }
})

const {setLoading,setFailed,setSuccess,clearError} = loginSlice.actions;
export {clearError}
export default loginSlice.reducer

export const loginUserAction = (email:String,password:any)=>async(dispatch:any)=>{
    try {
        dispatch(setLoading());
        const response = await LoginUser(email,password);
        dispatch(setSuccess(response))
    } catch (error) {
        dispatch(setFailed(error))
    }
}

export const getLoggedUserAction = ()=>async(dispatch:Dispatch)=>{
    try {
        dispatch(setLoading());
        const response = await getLoggedUser();
        dispatch(setSuccess(response))
    } catch (error) {
        dispatch(setFailed(error));
    }
}

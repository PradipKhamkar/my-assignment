import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logOut } from "../../api/authApis";
import { Dispatch } from "redux";

const logOutSlice = createSlice({
  name: "logout",
  initialState: {},
  reducers: {
    setLoading(state) {
      return {
        loading: true,
      };
    },
    setSuccess(state, action: PayloadAction<any>) {
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    },
    setFailed(state, action: PayloadAction<any>) {
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload,
      };
    },
    clearError(state) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

const { setLoading, setFailed, setSuccess, clearError } = logOutSlice.actions;
export { clearError };
export default logOutSlice.reducer;

export const loggedOutAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading());
    const response = await logOut();
    dispatch(setSuccess(response));
  } catch (error) {
    setFailed(error);
  }
};

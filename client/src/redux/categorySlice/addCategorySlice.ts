import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { addCategory, CategoryDataInterface } from "../../api/categoryApis";

interface InitialStateInterface {
  loading?: boolean;
  success?: boolean;
  message?: String | null;
  error?: any;
}

const initialState: InitialStateInterface = {};

const addCategorySlice = createSlice({
  name: "addCategory",
  initialState,
  reducers: {
    setLoading(state) {
      return {
        loading: true,
      };
    },
    setSuccess(state, action) {
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };
    },
    setFailed(state, action) {
      return {
        loading: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    },
    clearError(state) {
      return {
        ...state,
        error: null,
      };
    },
    clearMessage(state) {
      return {
        ...state,
        message: null,
      };
    },
  },
});

const { setLoading, setSuccess, setFailed, clearError, clearMessage } =
  addCategorySlice.actions;
export { clearError, clearMessage };

export const addCategoryAction =
  (categoryData: CategoryDataInterface) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading());
      const response = await addCategory(categoryData);
      dispatch(setSuccess(response));
    } catch (error: any) {
      dispatch(setFailed(error));
    }
  };

export default addCategorySlice.reducer;

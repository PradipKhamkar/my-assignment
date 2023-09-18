import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { deleteCategory } from "../../api/categoryApis";

interface InitialStateInterface {
  loading?: boolean;
  success?: boolean;
  message?: String | null;
  error?: any;
}
const initialState: InitialStateInterface = {};

const deleteCategorySlice = createSlice({
  name: "deleteCategory",
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
  deleteCategorySlice.actions;
export { clearError, clearMessage };

export const deleteCategoryAction =
  (categoryId: String | Number) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading());
      const response = await deleteCategory(categoryId);
      dispatch(setSuccess(response));
    } catch (error: any) {
      dispatch(setFailed(error));
    }
  };

export default deleteCategorySlice.reducer;

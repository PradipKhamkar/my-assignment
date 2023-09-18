import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { CategoryDataInterface, getAllCategory } from "../../api/categoryApis";

export interface GetCategorySliceInitialStateInterface {
  loading?: boolean;
  success?: boolean;
  message?: any;
  error?: any;
  categoriesData?: Array<CategoryDataInterface>;
}

const initialState: GetCategorySliceInitialStateInterface = {};

const getCategorySlice = createSlice({
  name: "getCategory",
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
        categoriesData: action.payload.categoriesData,
        message: action.payload.message,
      };
    },
    setFailed(state, action) {
      return {
        loading: false,
        error: action.payload.error,
        message: action.payload.message,
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
  getCategorySlice.actions;
export { clearError, clearMessage };

export const getCategoriesAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading());
    const response = await getAllCategory();
    dispatch(setSuccess(response));
  } catch (error: any) {
    dispatch(setFailed(error));
  }
};

export default getCategorySlice.reducer;

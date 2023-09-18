import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { CategoryDataInterface, getAllCategory } from "../../api/categoryApis";
import { getAllProduct, ProductDataInterface } from "../../api/productApis";

export interface GetProductSliceInitialStateInterface {
  loading?: boolean;
  success?: boolean;
  message?: any;
  error?: any;
  productsData?: Array<ProductDataInterface>;
}

const initialState: GetProductSliceInitialStateInterface = {};

const getProductSlice = createSlice({
  name: "getProduct",
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
        productsData: action.payload.productsData,
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
  getProductSlice.actions;
export { clearError, clearMessage };

export const getProductsAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading());
    const response = await getAllProduct();
    dispatch(setSuccess(response));
  } catch (error: any) {
    dispatch(setFailed(error));
  }
};

export default getProductSlice.reducer;

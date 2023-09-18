import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { deleteProduct } from "../../api/productApis";

interface InitialStateInterface {
  loading?: boolean;
  success?: boolean;
  message?: String | null;
  error?: any;
}
const initialState: InitialStateInterface = {};

const deleteProductSlice = createSlice({
  name: "deleteProduct",
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
  deleteProductSlice.actions;
export { clearError, clearMessage };

export const deleteProductAction =
  (productId: String | Number) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading());
      const response = await deleteProduct(productId);
      dispatch(setSuccess(response));
    } catch (error: any) {
      dispatch(setFailed(error));
    }
  };

export default deleteProductSlice.reducer;

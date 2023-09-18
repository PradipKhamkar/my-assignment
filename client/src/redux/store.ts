import loginReducer from "./userSlice/loginSlice";
import logOutReducer from "./userSlice/logOut";
import addProductReducer from "./productSlice/addProductSlice";
import getProductsReducer from "./productSlice/getProductsSlice";
import updateProductReducer from "./productSlice/updateProduct";
import deleteProductReducer from "./productSlice/deleteProductSlice";
import addCategoryReducer from "./categorySlice/addCategorySlice";
import updateCategoryReducer from "./categorySlice/updateCategorySlice";
import deleteCategoryReducer from "./categorySlice/deleteCategorySlice";
import getCategoriesReducer from "./categorySlice/getCategorySlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loginUser: loginReducer,
    logout: logOutReducer,
    addProduct: addProductReducer,
    getProducts: getProductsReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    addCategory: addCategoryReducer,
    getCategories: getCategoriesReducer,
    updateCategory: updateCategoryReducer,
    deleteCategory: deleteCategoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

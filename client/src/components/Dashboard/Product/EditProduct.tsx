import { useState, useEffect } from "react";
import {
  CategoryDropDown,
  TextInput,
  DropDownInput,
  FileInput,
  EditCategoryDropDown,
} from "../../common/Inputs";
import BoxContainer from "../../container/BoxContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hook";
import {
  updateProductAction,
  clearError,
  clearMessage,
} from "../../../redux/productSlice/updateProduct";
import {
  getCategoriesAction,
  clearError as clearCategoryError,
  clearMessage as clearCategoryMessage,
} from "../../../redux/categorySlice/getCategorySlice";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Loader from "../../common/Loader";

const EditProduct = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState(location.state);

  const { loading, message, error, success } = useSelector(
    (state: RootState) => state.updateProduct
  );

  const {
    loading: categoryLoading,
    message: categoryMessage,
    error: categoryError,
    categoriesData,
  } = useSelector((state: RootState) => state.getCategories);

  const [category, setCategory] = useState(product?.category?._id);
  const [name, setName] = useState(product?.name);
  const [packSize, setPackSize] = useState(product?.packSize);
  const [mrp, setMrp] = useState(product?.mrp);
  const [status, setStatus] = useState(product?.status);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(product?.image);

  // console.log(product?.category?._id);
  const handelSubmit = () => {
    if (
      category.trim().length !== 0 &&
      name.trim().length !== 0 &&
      packSize.trim().length !== 0 &&
      mrp.trim().length !== 0
    ) {
      dispatch(
        updateProductAction({
          _id: product?._id,
          name,
          category,
          mrp,
          image,
          packSize,
          status,
        })
      );
    } else {
      alert("All fields are required");
    }
  };

  //handel image
  const handelImageChange = (e: any) => {
    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImagePreview(window.URL.createObjectURL(e.target.files[0]));
  };

  if (success && message) {
    alert("Product Updated Successfully");
    dispatch(clearMessage());
    Navigate("/dashboard/product");
  }

  if (error || categoryError) {
    alert(error);
    // console.log(categoryError);
    dispatch(clearError());
    dispatch(clearCategoryError());
  }

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  return loading || categoryLoading ? (
    <Loader />
  ) : !categoryError ? (
    <BoxContainer clasName="flex flex-col justify-between p-5  pb-8">
      <div>
        <div className="flex justify-start items-center gap-4">
          <img
            src={require("../../../assets/images/LeftArrowIcon.png")}
            className="cursor-pointer"
            alt=""
            onClick={() => Navigate(-1)}
          />
          <h1 className="text-lg font-bold">Edit Product</h1>
        </div>
        <div className="mt-16 flex justify-start flex-wrap md:gap-10 gap-14">
          <EditCategoryDropDown
            value={category}
            label="Category"
            productCategory={product?.category}
            handelChange={setCategory}
            categoriesData={categoriesData}
            className="md:w-80 w-full"
          />
          <TextInput
            value={name}
            label="Product Name"
            handelChange={setName}
            className="md:w-80 w-full"
          />
          <TextInput
            value={packSize}
            label="Pack Size"
            handelChange={setPackSize}
            className="md:w-80 w-full"
          />
          <TextInput
            value={mrp}
            label="MRP"
            handelChange={setMrp}
            className="md:w-80 w-full"
          />
          <FileInput
            // value={image}
            label="Product Image"
            handelChange={handelImageChange}
            className="md:w-80 w-full"
          />
          <DropDownInput
            value={status}
            label="Status"
            handelChange={setStatus}
            option={["Active", "Inactive"]}
            className="md:w-80 w-full"
          />
        </div>
      </div>
      <div className="flex lg:justify-end gap-8 items-center justify-center md:mt-0 mt-10">
        <button
          className="border-[#676767] text-[#676767] border-[0.2px] outline-none bg-none rounded-2xl px-5 md:px-14 py-2"
          onClick={() => Navigate(-1)}
        >
          Cancel
        </button>
        <button
          className="bg-[#662671] text-white text-base border-none outline-none rounded-2xl px-5 md:px-14 py-2"
          onClick={handelSubmit}
        >
          Save
        </button>
      </div>
    </BoxContainer>
  ) : (
    <h1>Filed To Load Category</h1>
  );
};

export default EditProduct;

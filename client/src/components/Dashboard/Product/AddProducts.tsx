import { useState, useEffect } from "react";
import {
  CategoryDropDown,
  TextInput,
  DropDownInput,
  FileInput,
} from "../../common/Inputs";
import BoxContainer from "../../container/BoxContainer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hook";
import {
  addProductAction,
  clearError as clearProductError,
  clearMessage as clearProductMessage,
} from "../../../redux/productSlice/addProductSlice";
import {
  getCategoriesAction,
  clearError as clearCategoryError,
  clearMessage as clearCategoryMessage,
} from "../../../redux/categorySlice/getCategorySlice";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Loader from "../../common/Loader";

const AddProduct = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, message, error, success } = useSelector(
    (state: RootState) => state.addProduct
  );

  const {
    loading: categoryLoading,
    message: categoryMessage,
    error: categoryError,
    categoriesData,
  } = useSelector((state: RootState) => state.getCategories);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [packSize, setPackSize] = useState("");
  const [mrp, setMrp] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handelSubmit = () => {
    if (
      category.trim().length !== 0 &&
      name.trim().length !== 0 &&
      packSize.trim().length !== 0 &&
      mrp.trim().length !== 0
    ) {
      dispatch(
        addProductAction({
          name,
          category,
          mrp,
          image,
          packSize,
          status,
        })
      );
      setCategory("");
      setImage("");
      setMrp("");
      setName("");
      setPackSize("");
      setStatus("");
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
    alert("Product Added Successfully");
    dispatch(clearProductMessage());
  }

  if (message || categoryMessage) {
    dispatch(clearCategoryMessage());
    dispatch(clearProductMessage());
  }

  if (error || categoryError) {
    alert("Failed to load Data");
    // console.log(categoryError);
    dispatch(clearProductError());
    dispatch(clearCategoryError());
  }

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  return loading || categoryLoading ? (
    <Loader />
  ) : !error && !categoryError ? (
    <BoxContainer clasName="flex flex-col justify-between p-5  pb-8">
      <div>
        <div className="flex justify-start items-center gap-4">
          <img
            src={require("../../../assets/images/LeftArrowIcon.png")}
            className="cursor-pointer"
            alt=""
            onClick={() => Navigate(-1)}
          />
          <h1 className="text-lg font-bold">Add Products</h1>
        </div>
        <div className="mt-16 flex justify-start flex-wrap md:gap-10 gap-14">
          <CategoryDropDown
            value={category}
            label="Category"
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

export default AddProduct;

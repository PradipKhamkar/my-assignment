import React, { useEffect, useState } from "react";
import BoxContainer from "../../container/BoxContainer";
import CategoryDataTable from "./CategoryDataTable";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hook";
import { getCategoriesAction } from "../../../redux/categorySlice/getCategorySlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { clearMessage } from "../../../redux/categorySlice/getCategorySlice";
import Loader from "../../common/Loader";

const Category = () => {
  const { error, loading, categoriesData, message, success } = useSelector(
    (state: RootState) => state.getCategories
  );

  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>();

  const getStateFromChild = (state: any) => {
    setData(state);
  };

  const handelSearch = (keyword: any) => {
    const filtered = data[0]?.filter((item: any) =>
      item?.name
        ?.trim()
        ?.toLowerCase()
        ?.includes(keyword?.trim()?.toLowerCase())
    );
    data[1](filtered);
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  if (message) {
    console.log(message);
    dispatch(clearMessage());
  }

  if (error) {
    alert(error);
    dispatch(clearMessage());
  }

  return loading ? (
    <Loader />
  ) : !error && success ? (
    <BoxContainer>
      <div className="p-5 flex justify-between flex-col-reverse items-center  md:flex-row  md:gap-0 gap-5">
        <div className="flex md:w-[70%] justify-between w-full md:gap-0 gap-3">
          <div className="flex items-center gap-4">
            <img
              src={require("../../../assets/images/categoryIcon.png")}
              alt=""
              className="w-[1.30rem]"
            />
            <h1 className="text-lg font-bold hidden md:block">Category</h1>
          </div>
          <div className="flex items-center inputBorder outline-none h-9 rounded-lg px-3 md:w-[70%] w-full ">
            <img
              src={require("../../../assets/images/searchIcon.png")}
              alt=""
              className="w-4"
            />
            <input
              type="text"
              className="outline-none px-2 w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handelSearch(e.target.value)
              }
            />
          </div>
        </div>
        <div>
          <Link
            to="/dashboard/category/add"
            className="bg-[#662671] text-white text-base py-2 px-4 rounded-lg"
          >
            Add New
          </Link>
        </div>
      </div>
      {/* table goes here */}
      <div className="mt-2">
        <CategoryDataTable
          categoriesData={categoriesData}
          sentStateBack={getStateFromChild}
        />
      </div>
    </BoxContainer>
  ) : (
    <h1>Failed load data</h1>
  );
};

export default Category;

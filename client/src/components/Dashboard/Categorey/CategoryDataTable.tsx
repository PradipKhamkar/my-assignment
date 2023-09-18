import React, { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { CategoryInterface } from "../../../data/categoryTable";
import ConfirmAlert from "../../common/ConfirmAlert";
import { useAppDispatch } from "../../../hooks/hook";
import {
  clearMessage,
  deleteCategoryAction,
} from "../../../redux/categorySlice/deleteCategorySlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import Loader from "../../common/Loader";
import { getCategoriesAction } from "../../../redux/categorySlice/getCategorySlice";

const CategoryDataTable: React.FC<any> = ({
  categoriesData,
  sentStateBack,
}) => {
  const { loading, message, success, error } = useSelector(
    (state: RootState) => state.deleteCategory
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(() => [...categoriesData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columnHelper = createColumnHelper<CategoryInterface>();

  const handleDelete = (e: any) => {
    ConfirmAlert("Confirm", "Delete", "Are you sure you want to delete ?", () =>
      dispatch(deleteCategoryAction(e))
    );
  };

  const handleEdit = (e: any) => {
    const product = categoriesData?.filter(
      (category: any) => category._id === e
    );
    navigate("/dashboard/category/edit", {
      state: product[0],
    });
  };

  const columns = [
    columnHelper.accessor("_id", {
      cell: (info) => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("description", {
      cell: (info) => info.getValue(),
      header: "Description",
    }),
    columnHelper.accessor("status", {
      cell: (info) => info.getValue(),
      header: "Status",
    }),
    columnHelper.accessor("action", {
      header: "",
      cell: (info) => (
        <div className="flex gap-5 justify-center items-center">
          <img
            src={require("../../../assets/images/editIcon.png")}
            alt=""
            onClick={() => handleEdit(info.row.original._id)}
            className="cursor-pointer w-5"
          />
          <img
            src={require("../../../assets/images/deleteIcon.png")}
            alt=""
            onClick={() => handleDelete(info.row.original._id)}
            className="cursor-pointer w-5"
          />
        </div>
      ),
    }),
  ];

  const Table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  if (success && message) {
    // navigate("/dashboard/category");
    dispatch(clearMessage());
    dispatch(getCategoriesAction());
    // console.log("deleted");
  }

  useEffect(() => {
    sentStateBack([data, setData]);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="overflow-auto">
      <table className="w-full">
        <thead className="bg-[#FFF8B7] ">
          {Table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4">
                  {header.column.columnDef.header !== "" ? (
                    <div className="flex justify-center items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <img
                        src={require("../../../assets/images/sortIcon.png")}
                        alt=""
                        className="cursor-pointer w-4"
                        onClick={header.column.getToggleSortingHandler()}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="text-center mt-5">
          {Table.getRowModel().rows.map((row) => (
            <>
              <div className="h-4" />
              <tr key={row.id} className="bg-[#F2F2F2] ">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`p-4 ${
                      cell.column.columnDef.header === "Status" &&
                      cell.getValue() === "Active"
                        ? "text-green-500"
                        : cell.getValue() === "Inactive"
                        ? "text-[#B13129]"
                        : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryDataTable;

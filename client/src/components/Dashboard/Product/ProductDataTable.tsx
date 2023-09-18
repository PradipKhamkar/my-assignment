import React, { useState, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { deleteProduct, ProductDataInterface } from "../../../api/productApis";
import ConfirmAlert from "../../common/ConfirmAlert";
import { useAppDispatch } from "../../../hooks/hook";
import {
  clearMessage,
  deleteProductAction,
} from "../../../redux/productSlice/deleteProductSlice";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getProductsAction } from "../../../redux/productSlice/getProductsSlice";
import { useNavigate } from "react-router-dom";

const ProductDataTable: React.FC<any> = ({ productData, sentStateBack }) => {
  const { loading, message, success, error } = useSelector(
    (state: RootState) => state.deleteProduct
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState(() => [...productData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnHelper = createColumnHelper<ProductDataInterface>();

  const handleDelete = (e: any) => {
    ConfirmAlert("Confirm", "Delete", "Are you sure you want to delete ?", () =>
      dispatch(deleteProductAction(e))
    );
  };

  const handleEdit = (e: any) => {
    const product = productData?.filter((product: any) => product._id === e);
    navigate("/dashboard/product/edit", {
      state: product[0],
    });
  };

  if (success && message) {
    dispatch(clearMessage());
    dispatch(getProductsAction());
    // console.log("deleted");
  }

  const columns = [
    columnHelper.accessor("_id", {
      cell: (info) => (
        <div className="flex justify-center items-center">
          <p className="">{info.row.original._id?.slice(0, 5)}...</p>
        </div>
      ),
      header: "ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("packSize", {
      cell: (info) => info.getValue(),
      header: "Pack Size",
    }),
    columnHelper.accessor("category", {
      cell: (info) => (
        <div className="flex justify-center items-center">
          <p className="">{info.row.original.category.name}</p>
        </div>
      ),
      header: "Category",
    }),
    columnHelper.accessor("mrp", {
      cell: (info) => info.getValue(),
      header: "MRP",
    }),
    columnHelper.accessor("image", {
      cell: (info) => (
        <div className="flex justify-center items-center">
          <img
            src={info.row.original.image}
            alt="product image"
            className="h-16 w-16"
          />
        </div>
      ),
      header: "Image",
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

  const table = useReactTable({
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

  useEffect(() => {
    sentStateBack([data, setData]);
  }, []);

  return (
    <div className="overflow-auto">
      <table className="w-full">
        <thead className="bg-[#FFF8B7] ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 ">
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
          {table.getRowModel().rows.map((row) => (
            <>
              <div className="h-4" />
              <tr key={row.id} className="bg-[#F2F2F2] ">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`p-3 ${
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

export default ProductDataTable;

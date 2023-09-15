import React, { useState } from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"
import { categoryData, categoryInterface } from '../../../data/categoryTable'
import ConfirmAlert from '../../common/ConfirmAlert';

const CategoryDataTable = () => {
    const [data, setData] = useState(() => [...categoryData]);
    const [sorting, setSorting] = React.useState<SortingState>([])

    const columnHelper = createColumnHelper<categoryInterface>();
    
    const handleDelete = (e: any) => {
       ConfirmAlert("Confirm","Delete","Are you sure you want to delete ?",()=>console.log(e))
    }

    const handleEdit = (e: any) => {
        console.log(e);
    }

    const columns = [
        columnHelper.accessor('id', {
            cell: info => info.getValue(),
            header: "ID",
        }),
        columnHelper.accessor('name', {
            cell: info => info.getValue(),
            header: 'Name'
        }),
        columnHelper.accessor('description', {
            cell: info => info.getValue(),
            header: 'Description'

        }),
        columnHelper.accessor('status', {
            cell: info => info.getValue(),
            header: 'Status'
        }),
        columnHelper.accessor("action", {
            header: "",
            cell: info =>
                <div className='flex gap-5 justify-center items-center'>
                    <img src={require("../../../assets/images/editIcon.png")} alt="" onClick={() => handleEdit(info.row.original.id)} className='cursor-pointer' />
                    <img src={require("../../../assets/images/deleteIcon.png")} alt="" onClick={() => handleDelete(info.row.original.id)} className='cursor-pointer' />
                </div>
        })

    ]

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
    })


    return (
        <div className='overflow-auto'>
            <table className='w-full'>
                <thead className='bg-[#FFF8B7] '>
                    {table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => <th key={header.id} className='p-4 text-lg'>
                            {
                                header.column.columnDef.header !== "" ?

                                    <div className='flex justify-center items-center gap-2'>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        <img src={require('../../../assets/images/sortIcon.png')} alt=""
                                            className='cursor-pointer'
                                            onClick={header.column.getToggleSortingHandler()} />
                                    </div>
                                    : ""
                            }
                        </th>)}
                    </tr>)}
                </thead>

                <tbody className='text-center mt-5'>
                    {
                        table.getRowModel().rows.map(row =>
                            <>
                                <div className='h-4' />
                                <tr key={row.id} className='bg-[#F2F2F2] '>
                                    {row.getVisibleCells().map(cell => <td key={cell.id}
                                        className={`p-4 ${cell.column.columnDef.header === 'Status' &&
                                            cell.getValue() === 'Active' ? "text-green-500" : cell.getValue() === 'Inactive' ? "text-[#B13129]" : ""
                                            }`}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>)}
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryDataTable
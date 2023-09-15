import React from 'react'
import BoxContainer from '../../container/BoxContainer'
import ProductDataTable from './ProductDataTable'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <BoxContainer>
      <div className='p-5 flex justify-between flex-col-reverse items-center  md:flex-row  md:gap-0 gap-5'>
   <div className='flex md:w-[70%] justify-between w-full md:gap-0 gap-3'>
   <div className='flex items-center gap-4'>
          <img src={require("../../../assets/images/productsIcon.png")} alt="" />
          <h1 className='text-lg font-bold hidden md:block'>Product</h1>
        </div>
        <div className='flex items-center inputBorder outline-none h-9 rounded-lg px-3 md:w-[70%] w-full '>
          <img src={require("../../../assets/images/searchIcon.png")} alt="" />
          <input type="text" className='outline-none px-2 w-full' />
        </div>
   </div>
        <div>
          <Link to="/dashboard/product/add" className='bg-[#662671] text-white text-base py-2 px-4 rounded-lg'>Add New</Link>
        </div>
      </div>
      {/* table goes here */}
     <div className='mt-2'>
     <ProductDataTable />
     </div>
      </BoxContainer>
  )
}

export default Product
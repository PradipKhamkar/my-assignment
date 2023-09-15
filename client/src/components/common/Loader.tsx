import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
 <div className='flex h-screen w-full justify-center items-center'>
<ClipLoader
    color="red"
    loading={true}
    // cssOverride={override}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
 </div>
  )
}

export default Loader
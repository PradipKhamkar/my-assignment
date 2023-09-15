import React from 'react'

interface IPROPS {
    children: React.ReactNode,
    clasName?:String
}

const BoxContainer: React.FC<IPROPS> = ({ children,clasName }) => {
    return (
        <div className={`bg-white customShadow rounded-md md:h-[88vh]  ${clasName} overflow-auto`}>
            {children}
        </div>
    )
}

export default BoxContainer
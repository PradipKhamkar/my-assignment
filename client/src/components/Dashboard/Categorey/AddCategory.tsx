import { useState } from "react";
import { TextInput, DropDownInput } from "../../common/Inputs"
import BoxContainer from "../../container/BoxContainer"
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const Navigate = useNavigate()
    const [categoryName, setCategoryName] = useState("");
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState("");

    return (

        <BoxContainer clasName="flex flex-col justify-between p-5  pb-8">
            <div>
                <div className="flex justify-start items-center gap-4">
                    <img src={require('../../../assets/images/LeftArrowIcon.png')} className="cursor-pointer" alt="" onClick={()=>Navigate(-1)}/>
                    <h1 className="text-lg font-bold">Add Category</h1>
                </div>
                <div className="mt-16 flex justify-start flex-wrap md:gap-10 gap-14">
                    <TextInput value={categoryName} label="Category Name" handelChange={setCategoryName} className="md:w-80 w-full" />
                    <TextInput value={desc} label="Description" handelChange={setDesc} className="md:w-80 w-full" />
                    <DropDownInput value={status} label="Status" handelChange={setStatus} option={["Active", "Inactive"]}  className="md:w-72 w-full" />
                </div>
            </div>
            <div className="flex lg:justify-end gap-8 items-center justify-center">
                <button className="border-[#676767] text-[#676767] border-[0.2px] outline-none bg-none rounded-2xl px-5 md:px-14 py-2" onClick={()=>Navigate(-1)}>Cancel</button>
                <button className="bg-[#662671] text-white text-base border-none outline-none rounded-2xl px-5 md:px-14 py-2">Save</button>
            </div>
           
        </BoxContainer>)
}


export default AddCategory
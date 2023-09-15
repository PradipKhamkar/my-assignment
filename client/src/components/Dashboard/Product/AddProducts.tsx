import { useState } from "react";
import { TextInput, DropDownInput, NumberInput, FileInput } from "../../common/Inputs"
import BoxContainer from "../../container/BoxContainer"
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const Navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState('');
    const [packSize, setPackSize] = useState("");
    const [mrp, setMrp] = useState("");
    const[status,setStatus] = useState('');
    const[pImage,setPimage] = useState("");


    return (
        <BoxContainer clasName="flex flex-col justify-between p-5  pb-8">
            <div>
                <div className="flex justify-start items-center gap-4">
                    <img src={require('../../../assets/images/LeftArrowIcon.png')}  className="cursor-pointer" alt="" onClick={()=>Navigate(-1)}/>
                    <h1 className="text-lg font-bold">Add Products</h1>
                </div>
                <div className="mt-16 flex justify-start flex-wrap md:gap-10 gap-14">
                <DropDownInput value={category} label="Category" handelChange={setCategory} option={["Milk", "Vegetable"]}  className="md:w-80 w-full" />
                    <TextInput value={productName} label="Product Name" handelChange={setProductName} className="md:w-80 w-full" />
                    <NumberInput value={packSize} label="Pack Size" handelChange={setPackSize} className="md:w-80 w-full" />
                    <NumberInput value={mrp} label="MRP" handelChange={setMrp} className="md:w-80 w-full" />
                    <FileInput value={pImage} label="Product Image"  handelChange={setPimage}  className="md:w-80 w-full" />
                    <DropDownInput value={status} label="Status" handelChange={setStatus} option={["Active", "Inactive"]}  className="md:w-80 w-full" />
                </div>
            </div>
            <div className="flex lg:justify-end gap-8 items-center justify-center md:mt-0 mt-10">
                <button className="border-[#676767] text-[#676767] border-[0.2px] outline-none bg-none rounded-2xl px-5 md:px-14 py-2" onClick={()=>Navigate(-1)}>Cancel</button>
                <button className="bg-[#662671] text-white text-base border-none outline-none rounded-2xl px-5 md:px-14 py-2">Save</button>
            </div>
        </BoxContainer>)
}


export default AddProduct
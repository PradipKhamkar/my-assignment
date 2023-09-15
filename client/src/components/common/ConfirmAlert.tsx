
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { AleartSvg } from './Svg';


const ConfirmAlert = (buttonLabel:String,heading:String,textLabel:String,handelClickAction:Function)=>   confirmAlert({
    customUI: ({ onClose }) => {
        return (
            <div className='md:h-60 h-full md:w-[30rem] w-full flex flex-col justify-center items-center bg-white shadow-2xl rounded-md gap-10 md:p-0 p-5'>
            <div>
                <div className='flex justify-center items-center gap-5 flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <AleartSvg size={32} color="red" />
                        <h2 className='md:text-3xl text-xl font-bold'>{heading}</h2>
                    </div>
                    <p className='md:text-2xl text-xl  text-lightWhite text-center'>{textLabel}</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <button className="border-[#676767] text-[#676767] border-[0.2px] outline-none bg-none rounded-2xl px-5 md:px-12 py-2" onClick={()=>onClose()}>Cancel</button>
                <button className="bg-[#662671] text-white text-base border-none outline-none rounded-2xl px-5 md:px-12 py-2" onClick={()=>{onClose()
                    handelClickAction()}}>{buttonLabel}</button>
            </div>
        </div>
        );
    }
});

export default ConfirmAlert
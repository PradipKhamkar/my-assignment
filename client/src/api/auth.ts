import axios from "axios";

//const BASE_URL = 'http://localhost:8000/api/v1';
const prefix = '/api/v1/user';

//lOGIN USER
export const LoginUser = async(email:String,password:any)=>{
    try {
        const {data} = await axios.post(`${prefix}/login`,{
            email,
            password
        })
        console.log(data);
        return data
    } catch (error:any) {
        console.log(error);
        throw error?.response?.data?.message
    }
}

// GET LOGGED USER
export const getLoggedUser = async()=>{
try {
    const{data} = await axios.get(`${prefix}/getloggedUser`);
    return data
} catch (error:any) {
    console.log(error);
    throw error?.response?.data?.message
}
}

// LOG OUT USER
export const logOut = async()=>{
    try {
        const {data} = await axios.get(`${prefix}/logout`)
        return data
    } catch (error:any) {
        throw error?.response?.message
    }
}
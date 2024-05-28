import axios, { Axios, AxiosResponse } from "axios";
import $api from "../../../app/api/http";
interface LoginResponse{
    role: string, 
    userId:number
}
export default class LoginService{
    
    static async login(username:string, password:string):Promise<AxiosResponse<LoginResponse>>{
        return $api.post<LoginResponse>('users',{
            username, password
        })
    }

 
}
import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
export interface AccountUser {
    userId: number;
    username: string;
    email: string;
    password: string;
  }

interface UserInfoResponse {
    statusCode: number;
    message: string;
    data: AccountUser[];
}

export class AdminPanelService{
    static getAllUsers(): Promise<AxiosResponse<UserInfoResponse>> {
        return $api.get<UserInfoResponse>(`/users/to-admin`)
    }
    static deleteUser(userId:number): Promise<AxiosResponse> {
        return $api.delete(`/users`,{params:{
            userId
        }})
    }
}
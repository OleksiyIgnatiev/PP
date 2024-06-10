import { Axios, AxiosResponse } from "axios";
import $api from "../../../app/api/http";
import { UserInfo } from "../models/UserInfo";

// Определение интерфейсов
interface UserInfoResponse {
    statusCode: number;
    message: string;
    data: UserInfo;
}




export class AccountService {
    static getUserInfo(userId: number): Promise<AxiosResponse<UserInfoResponse>> {
        return $api.get<UserInfoResponse>(`/users/info/${userId}`)
    }
}
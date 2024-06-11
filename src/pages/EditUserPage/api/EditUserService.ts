import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
import { UserInfo } from "../../AccountPage/models/UserInfo";

interface UserInfoResponse {
    statusCode: number;
    message: string;
    data: UserInfo;
}


export class EditUserService{
    static getUserInfo(userId: number): Promise<AxiosResponse<UserInfoResponse>> {
        return $api.get<UserInfoResponse>(`/users/info/${userId}`)
    }
    static changeUserInfo(userId: number,username:string,email:string,password:string ): Promise<AxiosResponse<UserInfoResponse>> {
        return $api.put<UserInfoResponse>(`/users/change/`,{
            "userId": userId,
            "username": username,
            "email": email,
            "password": password
        })
    }
}
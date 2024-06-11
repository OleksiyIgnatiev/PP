import { AxiosResponse } from "axios";
import $api from "../app/api/http";
import { UserInfo } from "../pages/AccountPage/models/UserInfo";

// Определение интерфейсов
interface UserInfoResponse {
    statusCode: number;
    message: string;
    data: UserInfo;
}

export class MainServise{
    static getUserInfo(userId: number): Promise<AxiosResponse<UserInfoResponse  >> {
        return $api.get<UserInfoResponse>(`/users/info/${userId}`)
    }
}
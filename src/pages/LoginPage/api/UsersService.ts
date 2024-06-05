import  { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
interface LoginResponse {
    data: {
        role: string,
        userId: number
    }

}
export default class LoginService {
    static async login(username: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        return $api.post<LoginResponse>('users/login', {
            username, password
        })
    }

    static async loginGoogle(): Promise<AxiosResponse> {
        return $api.get<LoginResponse>('GoogleOAuth/RedirectOnOAuthServerlogin')
    }
}
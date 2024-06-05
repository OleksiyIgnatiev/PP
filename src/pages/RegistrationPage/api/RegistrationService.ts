import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";

interface RegistrationResponse {
    role: string;
    userId: number;
}

export default class RegistrationService {
    static async register(username: string, email: string, password: string): Promise<AxiosResponse<RegistrationResponse>> {
        return $api.post<RegistrationResponse>('users/register', {
            username,
            email,
            password
        });
    }
}

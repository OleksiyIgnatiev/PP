import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";

export class MailUserService{
    static getRecord(userId:number): Promise<AxiosResponse<{data:number}>>{
        return $api.get(`/record/${userId}`);
    }
}
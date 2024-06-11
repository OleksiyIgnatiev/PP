import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
export interface MessageData {
    message: string;
    user_id: number;
    admin_id: number;
  }
  
  interface getMessagesResponse {
    statusCode: number;
    message: string | null;
    data: MessageData[];
  }
export class MessageService {
    static getMessages(userId:number):Promise<AxiosResponse<getMessagesResponse>>{
        return $api.get(`message/${userId}`);
    }
}
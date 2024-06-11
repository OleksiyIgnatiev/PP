import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
interface sendMessageDto{
    message: string,user_id: number,admin_id:number
}
export class NoteService {
    static sendMessage(dto:sendMessageDto  ):Promise<AxiosResponse>{
        return $api.post('/message',
            dto
        )
    }
}
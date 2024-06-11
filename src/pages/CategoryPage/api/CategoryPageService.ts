import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
import { Word } from "../models/Word";

interface getWordsResponse {
    data:Word[]
    
}
export default class CategoryPageService {
    static async getWords(id:number): Promise<AxiosResponse<getWordsResponse>> {
        return $api.get<getWordsResponse>(`words/${id}`);
    }
    static async deleteCategory(id:number): Promise<AxiosResponse> {
        return $api.delete(`/category`,{
            params:{
                category_id: id
            }
        });
    }

    static async clearCategory(id:number): Promise<AxiosResponse> {
        return $api.put(`/category/clear-content/${id}`,);
    }
    static async resetProgres(id:number): Promise<AxiosResponse> {
        return $api.put(`/category/reset-progress/${id}`,);
    }
}

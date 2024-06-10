import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
import { Word } from "../../../pages/CategoryPage/models/Word";
interface getWordsByCategoryResponse{
    data: Word[]
}
export class WordsService {
    static getWordsByCategory(id: number): Promise<AxiosResponse<getWordsByCategoryResponse>> {
        return $api.get<getWordsByCategoryResponse>(`/words/${id}`);
    }
    static realizedWord(id: number): Promise<AxiosResponse> {
        return $api.put(`/words/realized/${id}`);
    }

}
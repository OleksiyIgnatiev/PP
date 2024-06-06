import { AxiosResponse } from 'axios';
import $api from '../../../app/api/http';

// Інтерфейс для відповіді на додавання слова
interface AddWordResponse {
    wordId: number;
    name: string;
    translation: string;
    categoryId: number;
}

export interface Category {
    categoryId: number;
    categoryName: string;
}

interface CategoryResponse {
    data: Category[];
}

export default class AddWordService {
    static async addWord(name: string, translation: string, categoryId: number, imgLink: string|null): Promise<AxiosResponse<AddWordResponse>> {
        return $api.post<AddWordResponse>('/words', {
            name,
            translation,
            categoryId,
            imgLink 
        });
    }

    static async fetchCategories(userId: number): Promise<AxiosResponse<CategoryResponse>> {
        return $api.get<CategoryResponse>(`Category/user/${userId}`);
    }

    static async genetateImage(query: string): Promise<AxiosResponse<string>> {
        return $api.get<string>(`words/image/${query}`);
    }
}

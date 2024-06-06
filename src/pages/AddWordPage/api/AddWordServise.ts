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
    categoryLength: number;
    categoryName: string;
    progressionPercentage: number;
    userId: number;
}

interface CategoryResponse {
    data: Category[];
}

export default class AddWordService {
    // Метод для додавання слова
    static async addWord(name: string, translation: string, categoryId: number, imgLink: string): Promise<AxiosResponse<AddWordResponse>> {
        return $api.post<AddWordResponse>('/words', {
            name,
            translation,
            categoryId,
            imgLink // Додано поле imgLink
        });
    }

    // Метод для отримання категорій конкретного користувача
    static async fetchCategories(userId: number): Promise<AxiosResponse<CategoryResponse>> {
        return $api.get<CategoryResponse>(`Category/user/${userId}`);
    }
}

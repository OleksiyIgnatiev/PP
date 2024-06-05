import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";

interface Category {
  categoryId: number;
  categoryName: string;
  userId: number;
  categoryLength: number;
  progressionPercentage: number;
}

export default class CategoryService {
  static async createCategory(categoryName: string, userId: number): Promise<AxiosResponse<Category>> {
    console.log(categoryName, userId);
    return $api.post<Category>('/Category', {
      categoryName,
      userId,
    });
  }

  static async getCategories(userId: number): Promise<AxiosResponse<Category[]>> {
    return $api.get<Category[]>(`/Category?userId=${userId}`);
  }
}

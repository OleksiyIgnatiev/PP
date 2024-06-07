import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";

export interface Category {
  categoryId: number;
  categoryName: string;
  userId: number;
  categoryLength: number;
  progressionPercentage: number;
}

interface CategoryResponse {
  data: Category[];
}
  

export default class CategoryService {
  static async createCategory(categoryName: string, userId: number): Promise<AxiosResponse<Category>> {
    console.log(categoryName, userId);
    return $api.post<Category>('/Category', {
      categoryName,
      userId,
    });
  }

  static async fetchCategories(userId: number): Promise<AxiosResponse<CategoryResponse>> {
    return $api.get<CategoryResponse>(`category/user/${userId}`);
}
}
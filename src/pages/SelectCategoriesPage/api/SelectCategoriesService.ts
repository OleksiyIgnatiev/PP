import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";
import { Category } from "../../CategoriesPage/api/CategoriesPageServise";


  
  interface CategoryResponse {
    data: Category[];
  }
    
export default class SelectCategoriesService {
    static async getCategories(userId: number): Promise<AxiosResponse<CategoryResponse>> {
        return $api.get<CategoryResponse>(`category/user/${userId}`);
    }
}

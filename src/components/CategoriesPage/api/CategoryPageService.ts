import { AxiosResponse } from "axios";
import $api from "../../../app/api/http";




export default class CategoryPageService {


    static async editCategory(id:number,name:string): Promise<AxiosResponse> {
        return $api.put(`/category`,
            {
                "categoryId": id,
                "categoryName": name
              }
        );
    }
}

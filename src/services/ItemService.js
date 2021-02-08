import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/v1/shop";

class ItemService {

    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }

}

export default new ItemService();
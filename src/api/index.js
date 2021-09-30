import axios from "axios";
import { config } from "../config";

const API_BASE_URL = `${config.API_BASE_URL}`;

const api = {
    getSkuName: (value) =>
    axios
      .get(`${API_BASE_URL}/api/demo_api_inventory/1.0/sku/search?sku_name=${value}`)
      .then(response => response.data),
}

export default api;
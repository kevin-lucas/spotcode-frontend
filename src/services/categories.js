import Api from "./api";
import Constants from "../config/constants";

const config = {
  headers: {
    client: Constants.client,
    access_token: Constants.accessToken,
    uid: Constants.uid,
  },
};

const CategoriesService = {
  show: (id) => Api.get(`/categories/${id}`, config),
  index: () => Api.get('/categories', config)
};

export default CategoriesService;

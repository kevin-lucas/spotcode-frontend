import Api from "./api";
import Constants from "../config/constants";

const config = {
  headers: {
    client: Constants.client,
    access_token: Constants.accessToken,
    uid: Constants.uid,
  },
};

const payload = {}

const FavoritesService = {
  index: () => Api.get("/favorites", config),
  create: (kind, id) => Api.post(`/${kind}/${id}/favorite`, payload, config),
  delete: (kind, id) => Api.delete(`/${kind}/${id}/favorite`, config),
};

export default FavoritesService;

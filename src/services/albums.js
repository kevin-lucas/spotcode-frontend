import Api from "./api";
import Constants from "../config/constants";

const config = {
  headers: {
    client: Constants.client,
    access_token: Constants.accessToken,
    uid: Constants.uid,
  },
};

const AlbumsService = {
  index: () => Api.get("/dashboard", config),
  show: (id) => Api.get(`/albums/${id}`, config),
};

export default AlbumsService;

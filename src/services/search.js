import Api from "./api";
import Constants from "../config/constants";

const config = {
  headers: {
    client: Constants.client,
    access_token: Constants.accessToken,
    uid: Constants.uid,
  },
};

const SearchService = {
  index: (query) => Api.get(`/search?query=${query}`, config),
};

export default SearchService;

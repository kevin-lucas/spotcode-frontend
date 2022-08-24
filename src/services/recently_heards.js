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

const RecentlyHeardsService = {

  create: (album_id) =>
    Api.post(`/albums/${album_id}/recently_heards`, payload, config),
};

export default RecentlyHeardsService;

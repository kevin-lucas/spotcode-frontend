import Api from "./api";

const config = {
  headers:{
    "client": "M6HWlW56vJPcTz4mCRuZrA",
    "access_token": "P2yiCOR8byz-2giP0X0Vtw",
    "uid": "freddie@mercury.com"
  }
};

const RecentlyHeardsService = {

  create: (album_id) =>
    Api.post(`/albums/${album_id}/recently_heards`, config),
};

export default RecentlyHeardsService;

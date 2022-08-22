import Api from "./api";

const config = {
    headers:{
      "client": "M6HWlW56vJPcTz4mCRuZrA",
      "access_token": "P2yiCOR8byz-2giP0X0Vtw",
      "uid": "freddie@mercury.com"
    }
  };

const AlbumsService = {
  index: () =>
    Api.get("/dashboard", config),
  show: (id) =>
  Api.get(`/albums/${id}`, config),
};

export default AlbumsService;

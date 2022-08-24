import Api from "./api";

const config = {
  headers: {
    "client": "M6HWlW56vJPcTz4mCRuZrA",
    "access_token": "P2yiCOR8byz-2giP0X0Vtw",
    "uid": "freddie@mercury.com",
  },
};

const payload = {}

const FavoritesService = {
  index: () => Api.get("/favorites", config),
  create: (kind, id) => Api.post(`/${kind}/${id}/favorite`, payload, config),
  delete: (kind, id) => Api.delete(`/${kind}/${id}/favorite`, config),
};

export default FavoritesService;

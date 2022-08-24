import Api from "./api";

const config = {
  headers: {
    client: "M6HWlW56vJPcTz4mCRuZrA",
    access_token: "P2yiCOR8byz-2giP0X0Vtw",
    uid: "freddie@mercury.com",
  },
};

const CategoriesService = {
  show: (id) => Api.get(`/categories/${id}`, config),
  index: () => Api.get('/categories', config)
};

export default CategoriesService;

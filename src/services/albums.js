import Api from "./api";

const config = {
    headers:{
      "client": "PUzLPACTJx1RIxpsh-D7Yg",
      "access_token": "7CX3T3ToZUl6IOGEVi7GJg",
      "uid": "diana@ross.com"
    }
  };

const AlbumsService = {
  index: () =>
    Api.get("/dashboard", config),
  show: (id) =>
  Api.get(`/albums/${id}`, config),
};

export default AlbumsService;

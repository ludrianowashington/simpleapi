const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/posts");

    return res.send(responseApi.data);
  },

  async show(req, res) {
    const postsId = [];

    const responseApi = await api.get("/posts");
    const selectedPost = responseApi.data;
  },
};

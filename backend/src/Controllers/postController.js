const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/posts");

    return res.send(responseApi.data);
  },

  async show(req, res) {
    const { id } = req.params;

    const responseApi = await api.get("/posts");

    const posts = responseApi.data;

    let selectedPost = {};
    posts.map((post) => {
      if (post.id == id) {
        selectedPost = post;
      }
    });

    res.send(selectedPost);
  },
};

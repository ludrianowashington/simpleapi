const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/posts");

    return res.send(responseApi.data);
  },

  async show(req, res) {
    const { id } = req.params;

    const responsePost = await api.get("/posts");
    const posts = await responsePost.data;

    const responseUser = await api.get("/users");
    const users = await responseUser.data;

    let userPost = [...posts]
      .map((post) => {
        const user = users.filter((user) => {
          return parseInt(user.id) === parseInt(post.userId);
        })[0];
        post.user = { id: user.id, name: user.name };
        return post;
      })
      .filter((post) => {
        return parseInt(post.id) === parseInt(id);
      });

    return res.send(userPost);
  },
};

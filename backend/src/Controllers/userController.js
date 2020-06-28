const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/users");

    return res.send(responseApi.data);
  },

  async show(req, res) {
    const { id } = req.params;

    const responsePost = await api.get("/posts");
    const posts = await responsePost.data;

    const responseUser = await api.get("/users");
    const users = await responseUser.data;

    let post = [];

    let userPosts = [...users]
      .map((user) => {
        post = posts.filter((post) => {
          return parseInt(post.userId) === parseInt(id);
        });
        user.posts = post.valueOf();
        return user;
      })
      .filter((user) => {
        return parseInt(user.id) === parseInt(id);
      });

    return res.send(userPosts);
  },
};

const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responsePost = await api.get("/posts");
    const posts = await responsePost.data;

    const responseUser = await api.get("/users");
    const users = await responseUser.data;

    let responseApi = [...posts].map((post) => {
      const user = users.filter((user) => {
        return parseInt(user.id) === parseInt(post.userId);
      })[0];
      post.author = user.name;
      return post;
    });

    return res.send(responseApi);
  },

  async show(req, res) {
    const { id } = req.params;

    const responsePost = await api.get("/posts");
    const posts = await responsePost.data;

    const responseUser = await api.get("/users");
    const users = await responseUser.data;

    let userPost = posts
      .map((post) => {
        const user = users.filter((user) => {
          return parseInt(user.id) === parseInt(post.userId);
        })[0];
        post.author = user.name;
        post.company = user.company.name;
        return post;
      })
      .filter((post) => {
        return parseInt(post.id) === parseInt(id);
      });

    return res.send(userPost[0]);
  },
};

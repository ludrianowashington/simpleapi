const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/users");

    const users = responseApi.data;
    const data = users.map(
      ({ id, name, username, email, company: { name: company } }) => ({
        id,
        name,
        username,
        email,
        company,
      })
    );

    return res.send(data);
  },

  async show(req, res) {
    const { id } = req.params;

    const responsePost = await api.get("/posts");
    const posts = await responsePost.data;

    const responseUser = await api.get("/users");
    const users = await responseUser.data;

    let dataPost = posts
      .filter((post) => post.userId === parseInt(id))
      .map(({ userId, id, title }) => ({ userId, id, title }));

    let dataUser = users
      .filter((user) => user.id === parseInt(id))
      .map((user) => ({
        user,
        post: dataPost,
      }));

    return res.send(dataUser);
  },
};

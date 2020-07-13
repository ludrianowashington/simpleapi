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

    let data = [...users]
      .map((user) => {
        const post = posts
          .filter((post) => {
            return parseInt(post.userId) === parseInt(user.id);
          })
          .map(({ userId, id, title }) => ({ userId, id, title }));

        user.address =
          user.address.street +
          ", " +
          user.address.suite +
          ", " +
          user.address.city +
          ", " +
          user.address.zipcode;

        user.company = user.company.name;

        user.posts = post;

        return user;
      })
      .filter((user) => {
        return parseInt(user.id) === parseInt(id);
      });

    return res.json(data[0]);
  },
};

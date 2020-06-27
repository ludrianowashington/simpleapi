const api = require("../Utils/api");
const { response } = require("express");
const { groupUser, groupPost } = require("../Utils/groupUserPost");

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

    let generalPosts = [...posts].map((post) => {
      const user = users.filter((user) => {
        return parseInt(user.id) === parseInt(post.userId);
      })[0];
      post.user = { name: user.name, company: user.company.name };
      console.log(post);
      return post;
    });

    return res.send(generalPosts);
  },
};

const api = require("../Utils/api");
const filterPosts = require("../Utils/filterUser");

module.exports = {
  async index(req, res) {
    const compannies = [];

    const responseApi = await api.get("/users");
    const users = responseApi.data;

    users.map((user) => {
      compannies.push(user.company);
    });

    return res.send(compannies);
  },
};

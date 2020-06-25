const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const responseApi = await api.get("/users");

    return res.send(responseApi.data);
  },

  async show(req, res) {
    const { id } = req.params;

    const responseApi = await api.get("/users");

    const users = responseApi.data;

    let selectedUser = {};
    users.map((user) => {
      if (user.id == id) {
        selectedUser = user;
      }
    });
    res.send(selectedUser);
  },
};

const axios = require("../Utils/api");
const api = require("../Utils/api");

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    const response = await api.get("/users");

    const user = response.data;

    let selectedUser = {};
    user.map((user) => {
      if (user.id == id) {
        selectedUser = user;
      }
    });

    return res.json(selectedUser);
  },
};

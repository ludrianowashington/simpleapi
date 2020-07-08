module.exports = {
  async index(req, res) {
    const { name } = req.body;

    return res.send("Olá, " + name + "!");
  },
};

const api = require("./api");

module.exports = {
  async groupPost(req, res) {
    const { id } = req.params;

    try {
      const response = await api.get("/post");

      const posts = await response.json();

      const data = posts
        .filter((post) => post.userId === parseInt(id, 10))
        .map(({ id, title, body }) => ({ id, title, body }));

      return res.send({ data });
    } catch (e) {
      return res.status(400);
    }
  },

  async groupUser(req, res) {
    const {
      "group-company-by": filterOne,
      "group-all-by": filterAll,
    } = req.query;

    const hasFilterOne = !!filterOne;
    const hasFilterall = !!filterAll;

    try {
      const response = await api.get("/user");

      const users = await response.json();

      let data = users.map(({ id, name, company: { name: company } }) => ({
        id,
        name,
        company,
      }));

      const key = "company";

      if (hasFilterall) {
        data = groupAllBy(data, key, filterAll);
      } else {
        data = hasFilterOne ? groupBy(data, key, filterOne) : data;
      }

      return res.send({
        data,
      });
    } catch (e) {
      return res.sendStatus(400);
    }
  },
};

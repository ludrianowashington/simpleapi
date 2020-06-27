const api = require("axios");

module.exports = {
  async postFilter(posts, companyId) {
    const usersResponse = await api.get("/users");
    const users = usersResponse.data;

    const filteredUsers = [];
    const filteredPosts = [];

    users.map((user) => {
      if (companyId.includes(user.company.id)) {
        const { id } = user;
        filteredUsers.push(id);
      }
    });
    posts.map((post) => {
      if (filteredUsers.includes(post.userId)) {
        filteredPosts.push(post);
      }
    });

    const updateUserPosts = (post) => {
      const user = users.find((x) => x.id === post.userId);
      return user;
    };

    filteredPosts.forEach(updateUserPosts);

    return filteredPosts;
  },
};

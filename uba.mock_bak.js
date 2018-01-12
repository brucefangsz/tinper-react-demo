module.exports = {
  GET: [
    {
      "/User/Get": "./mock/api/user/get.json"
    },
    { "/Item/Get": "./mock/api/user/item.json" },
    { "/MyItem/Get": "./mock/api/user/myitem.json" }
  ],
  POST: [
    {
      "/User/Post": "./mock/api/user/post.json"
    }
  ],
  PUT: [
    {
      "/User/Put": "./mock/api/user/put.json"
    }
  ]
};

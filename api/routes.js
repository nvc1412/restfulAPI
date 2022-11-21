"use strict";

const UserController = require("./controllers/UserController");

module.exports = function (app) {
  let userCtrl = require("./controllers/UserController");

  // todoList Routes
  app.route("/user").get(userCtrl.get).post(userCtrl.store);

  app
    .route("/user/:userId")
    .get(userCtrl.detail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

  app.route("/user/email/:userEmail").get(userCtrl.email);

  let productsCtrl = require("./controllers/ProductsController");

  // todoList Routes
  app.route("/products").get(productsCtrl.get).post(productsCtrl.store);

  app
    .route("/products/:productId")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  app.route("/products/page/:productPage").get(productsCtrl.page);

  app.route("/products/maker/:productMaker").get(productsCtrl.maker);
  app.route("/products/search/:productSearch").get(productsCtrl.search);
};

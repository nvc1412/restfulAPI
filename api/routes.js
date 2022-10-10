// "use strict";
// module.exports = function (app) {
//   let productsCtrl = require("./controllers/ProductsController");

//   // todoList Routes
//   app.route("/products").get(productsCtrl.get).post(productsCtrl.store);

//   app
//     .route("/products/:productId")
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };

"use strict";
module.exports = function (app) {
  let userCtrl = require("./controllers/UserController");

  // todoList Routes
  app.route("/user").get(userCtrl.get).post(userCtrl.store);

  app
    .route("/user/:userId")
    .get(userCtrl.detail)
    .put(userCtrl.update)
    .delete(userCtrl.delete);
};

const express = require("express");  //post,get 
const router = express.Router();
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const middleware = require("../middleware/auth")

//USER
router.post("/register", userController.registerUser)
router.post("/login", userController.userLogin)
router.get("/user/:userId/profile", middleware.authentication, userController.getProfile)
router.put("/user/:userId/profile", middleware.authentication, userController.updatedProfile)

//PRODUCT 
router.post("/products",productController.addproduct)
module.exports = router;

const router = require("express").Router();
const { createUser } = require('./user.controller');
router.post('/', createUser);
module.exports = router;

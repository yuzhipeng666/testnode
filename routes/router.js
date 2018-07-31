let express = require('express');

let user = require('../controls/user');
let api = require('../api');

let router = express.Router();

// user
router.post(api.userList, user.fetchAll);


module.exports = router;
